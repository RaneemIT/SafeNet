
const lessonGoals = {
    "lesson11.html": "Discover the basics of Cybersecurity and how to protect yourself online!\n\nReminder: Take the quiz after finishing!",
    "lesson21.html": "Learn about Authentication methods and how to secure your accounts!\n\nReminder: Take the quiz after finishing!",
    "lesson31.html": "Understand the types of Malware and how they affect your device!\n\nReminder: Take the quiz after finishing!",
    "lesson41.html": "Explore more about Malware and how to protect yourself!\n\nReminder: Take the quiz after finishing!",
    "lesson51.html": "Learn the basics of Encryption and how it protects your data!\n\nReminder: Take the quiz after finishing!",
    "lesson61.html": "Dive deeper into Encryption techniques!\n\nReminder: Take the quiz after finishing!"
};

window.addEventListener('load', function() {
    // يعرف احنا في أي صفحة
    const currentPage = window.location.pathname.split('/').pop();
    
    // يجيب هدف الدرس المناسب
    const goal = lessonGoals[currentPage];
    
    if (goal) {
        setTimeout(function() {
            alert(goal);
        }, 3000);
    }
});