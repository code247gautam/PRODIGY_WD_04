function discuss() {
  alert("Thank you for your interest! Let's connect to discuss your project.");
}


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Validate email format
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  // Send email using EmailJS
  emailjs.send("service_8t3tyvt", "template_2d3bnv6", {
    from_name: document.getElementById("name").value,
    reply_to: emailValue,
    message: document.getElementById("message").value,
  })
  .then(function () {
    alert("Your message has been sent successfully!");
    document.getElementById("contactForm").reset();
  }, function (error) {
    alert("Failed to send the message. Please try again.");
    console.error(error);
  });
});
