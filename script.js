// Initialize EmailJS
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // 🔴 Replace with your EmailJS Public Key
})();

// Get elements
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");
const btnText = submitBtn.querySelector(".btn-text");
const btnLoading = submitBtn.querySelector(".btn-loading");

// Submit event
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // UI loading state
  btnText.style.display = "none";
  btnLoading.style.display = "inline";
  submitBtn.disabled = true;

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",   // 🔴 Replace with EmailJS Service ID
      "YOUR_TEMPLATE_ID",  // 🔴 Replace with EmailJS Template ID
      contactForm
    )
    .then(
      function () {
        formStatus.className = "form-status success";
        formStatus.innerText = "✅ Message sent successfully!";
        contactForm.reset();
      },
      function (error) {
        formStatus.className = "form-status error";
        formStatus.innerText =
          "❌ Failed to send message. Please try again.";
        console.error("EmailJS Error:", error);
      }
    )
    .finally(function () {
      btnText.style.display = "inline";
      btnLoading.style.display = "none";
      submitBtn.disabled = false;
    });
});
