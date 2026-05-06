




function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const currentTime = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerText = currentTime;
}

updateClock();
setInterval(updateClock, 1000);

//----------------------------------------------//


// نجيب الزر
const themeBtn = document.getElementById("themeToggle");

// دالة تحديث شكل 
function updateButton() {
  if (!themeBtn) return;

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️"; 
  } else {
    themeBtn.textContent = "🌙"; 
  }
}

// عند تحميل الصفحة
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  updateButton();
});

// عند الضغط على الزر
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // نحفظ الحالة
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    updateButton();
  });
}