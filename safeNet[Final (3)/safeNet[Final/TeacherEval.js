
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("evalForm")
        .addEventListener("submit", function (e) {
            e.preventDefault(); // نوقف الsubmit

            // نجيب قيم الفورم
            const teacher  = document.getElementById("teacherSelect").value;
            const rating   = document.querySelector('input[name="rating"]:checked');
            const feedback = document.getElementById("feedbackText").value.trim();

            let valid = true; // افتراض إن كل شي صح

            // تحقق اذا اختار التيتشر
            const teacherSelect = document.getElementById("teacherSelect");
            if (!teacher) {
                // نلوّن الحدود باللون الأحمر للتنبيه
                teacherSelect.style.border = "2px solid red";
                valid = false;
            } else {
                teacherSelect.style.border = ""; // نرجع اللون الطبيعي
            }

            // تحقق اذا قيم او لا
            const ratingItems = document.querySelectorAll(".rating-item");
            if (!rating) {
                // نلوّن كل خيارات التقييم باللون الأحمر
                ratingItems.forEach(item => item.style.border = "2px solid red");
                valid = false;
            } else {
                ratingItems.forEach(item => item.style.border = ""); // نرجع الطبيعي
            }

            // تحقق من الكومنت فيدباك
            const feedbackInput = document.getElementById("feedbackText");
            if (!feedback) {
                feedbackInput.style.border = "2px solid red";
                valid = false;
            } else {
                feedbackInput.style.border = "";
            }

            // نوقف اذا في غلط
            if (!valid) {
                alert("Please fill in all fields before submitting!");
                return;
            }

            // التقييم اذا ايجابي او سلبي
            const goodRatings = ["excellent", "good"];

            if (goodRatings.includes(rating.value)) {
                // تقييم إيجابي
                alert(`Thank you for your positive feedback about ${teacher}!`);
            } else {
                // تقييم سلبي
                alert(`We apologize for your experience. We will work on improving!`);
            }

            // ينتقل الطالب للداشبورد
            window.location.href = "StudentDashboard.html";
        });
});