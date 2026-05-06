document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.querySelector('.quiz-form');
    if (!quizForm) return;

    const fileName = window.location.pathname.split('/').pop();
    const lessonKey = fileName.split('_')[0] || "lesson1";

    const correctAnswers = {
        "lesson1": { q1: "B", q2: "B" },
        "lesson2": { q1: "C", q2: "B" },
        "lesson3": { q1: "A", q2: "B" },
        "lesson4": { q1: "B", q2: "A" },
        "lesson5": { q1: "A", q2: "B" },
        "lesson6": { q1: "B", q2: "B" }
    };

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); // منع تحديث الصفحة

        // 1. لازم نعرف المتغيرات أولاً عشان نقدر نشيك عليها
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');

        // 2. الآن نشيك إذا الطالب حل الأسئلة أو لا (متطلب Phase 3)
        if (!q1 || !q2) { 
            alert("Please answer all questions before submitting!"); 
            return; 
        }

        let score = 0;
        const currentLessonAnswers = correctAnswers[lessonKey];

        // 3. حساب النتيجة بمقارنة الإجابات
        if (q1.value === currentLessonAnswers.q1) score++;
        if (q2.value === currentLessonAnswers.q2) score++;

        // 4. تخزين الدرجة الحالية للدرس المحدد 
        localStorage.setItem(lessonKey + "_current_score", score);

        // 5. تحديث "أفضل نتيجة" في الـ Local Storage
        let savedBest = localStorage.getItem(lessonKey + "_best_score");
        if (savedBest === null || score > parseInt(savedBest)) {
            localStorage.setItem(lessonKey + "_best_score", score);
        }

        // 6. الانتقال لصفحة النتيجة
        window.location.href = "result.html?lesson=" + lessonKey;
    });
});