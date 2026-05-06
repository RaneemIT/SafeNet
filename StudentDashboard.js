function loadScores() {
   
    const lessons = [
        { key: "lesson1", title: "Introduction to Cybersecurity" },
        { key: "lesson2", title: "Authentication" },
        { key: "lesson3", title: "Types of Malware - part 1" },
        { key: "lesson4", title: "Types of Malware - part 2" },
        { key: "lesson5", title: "Encryption - part 1" },
        { key: "lesson6", title: "Encryption - part 2" }
    ];

    const container = document.getElementById("scoresContainer");
    let hasScores = false;
    let rows = "";

    lessons.forEach(lesson => {
        const current = localStorage.getItem(lesson.key + "_current_score");
        const best    = localStorage.getItem(lesson.key + "_best_score");

        if (current !== null) {
            hasScores = true;
            rows += `
                <tr>
                    <td>${lesson.title}</td>
                    <td>${current} / 2</td>
                    <td>${best} / 2</td>
                    <td>Completed</td>
                </tr>`;
        }
    });

    // اذا مافي درجات مانعرض الجدول وتطلعله رسالة مناسبة
    if (!hasScores) {
        container.innerHTML = 
            `<p>You haven't completed any quizzes yet.</p>`;
        return;
    }

    // اذا في درجات نسوي الجدول
    container.innerHTML = `
        <table>
            <caption>Your Grades</caption>
            <tr>
                <th>Quiz Title</th>
                <th>Current Score</th>
                <th>Best Score</th>
                <th>Status</th>
            </tr>
            ${rows}
        </table>`;
}

// تشغيل عند فتح الصفحة
document.addEventListener("DOMContentLoaded", loadScores);