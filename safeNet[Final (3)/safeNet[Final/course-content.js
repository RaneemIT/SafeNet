document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("moreBtn");
  
  btn.addEventListener("click", function () {
    // 1. نختار كل العناصر التي تحمل كلاس hidden حالياً
    const hiddenLessons = document.querySelectorAll(".course-card.hidden");

    // 2. نقوم بحذف الكلاس hidden من كل درس
    hiddenLessons.forEach(function (lesson) {
      lesson.classList.remove("hidden"); 
    });

    // 3. إخفاء الزر نفسه بعد الضغط
    btn.style.display = "none";
  });
});