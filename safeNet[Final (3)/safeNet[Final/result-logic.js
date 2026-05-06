document.addEventListener('DOMContentLoaded', function() {
    //  استخراج اسم الدرس من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const lessonKey = urlParams.get('lesson') || "lesson1";

    //  جلب الدرجات من الـ Local Storage 
    const currentScore = parseInt(localStorage.getItem(lessonKey + "_current_score")) || 0;
    const bestScore = parseInt(localStorage.getItem(lessonKey + "_best_score")) || 0;

    //  تحديث الأرقام في الصفحة 
    const currentElem = document.getElementById("displayCurrentScore");
    const bestElem = document.getElementById("displayBestScore");
    if (currentElem) currentElem.innerText = currentScore + " / 2";
    if (bestElem) bestElem.innerText = bestScore + " / 2";

    // تحديث الرسالة التحفيزية (motivational-tag)
    const motivationalDiv = document.getElementById("motivation-text");
    if (motivationalDiv) {
            if (currentScore === 2) {
                motivationalDiv.innerText = "Excellent! You have mastered this lesson 🎉";
                motivationalDiv.style.backgroundColor = "#d4edda";
                motivationalDiv.style.color = "#155724";
            } else if (currentScore === 1) {
                motivationalDiv.innerText = "Good job! keep learning to get the full score 👍";
                motivationalDiv.style.backgroundColor = "#fff3cd";
                motivationalDiv.style.color = "#856404";
            } else {
                motivationalDiv.innerText = "Don't give up! Review the lesson and try again 💪";
                motivationalDiv.style.backgroundColor = "#f8d7da";
                motivationalDiv.style.color = "#721c24";
            }
        }

    // 5. تحديث الباث (Breadcrumbs) ديناميكياً لكل الدروس
    const pathContainer = document.getElementById("dynamic-path");
    if (pathContainer) {
        let pathHTML = "";
        // نحدد رقم الفصل والدرس بناءً على المفتاح
        const lessonNum = lessonKey.replace("lesson", ""); // بيعطينا 1, 2, 3...
        
        
        pathHTML = `
            <a href="lesson${lessonNum}1.html">Lesson ${lessonNum}.1</a> <span>›</span> 
            <a href="lesson${lessonNum}2.html">Lesson ${lessonNum}.2</a> <span>›</span> 
            <a href="lesson${lessonNum}_quiz.html">Quiz</a>
        `;
        pathContainer.innerHTML = pathHTML;
    }
});