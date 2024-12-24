// Initialize EmailJS with your Public Key
emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: name,
    email: email,
    message: message,
  })
    .then(() => {
      document.getElementById("status-message").textContent = "Message sent successfully!";
      document.getElementById("status-message").style.color = "green";
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("status-message").textContent = "Failed to send message.";
      document.getElementById("status-message").style.color = "red";
    });

  // Clear form fields
  document.getElementById("contact-form").reset();
});
