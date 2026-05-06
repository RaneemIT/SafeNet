document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonKey = urlParams.get('lesson') || 'lesson1';

    const currentScore = localStorage.getItem(lessonKey + "_current_score") || 0;
    const bestScore = localStorage.getItem(lessonKey + "_best_score") || 0;

    // تأكدي أن الـ IDs هذه موجودة في ملف HTML النتيجة 
    document.getElementById("displayCurrentScore").innerText = currentScore + " / 2";
    document.getElementById("displayBestScore").innerText = bestScore + " / 2";
});