
 
 const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); //ما يرسل بسرعه ينتظر التحقق

  const fullName = nameInput.value.trim();// تشيل الفراغات
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (fullName === "" || email === "" || message === "") {
    alert("Please fill in all required fields.");
    return;
  }

  if (!isNaN(fullName.charAt(0))) {
    alert("Name cannot start with a number.");
    return;
  }

  if (fullName.split(" ").length < 2) {
    alert("Please enter your full name (FirstName LastName).");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you, " + fullName + "! Your message has been sent successfully.");

  contactForm.reset();
});