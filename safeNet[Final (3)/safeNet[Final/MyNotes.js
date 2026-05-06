let tempNotes = JSON.parse(localStorage.getItem("notes")) || [];


function loadNotes() {
    const notesList = document.querySelector(".notes-list");
    const notesCount = document.getElementById("notesCount");
    
    notesCount.textContent = `You have ${tempNotes.length} saved notes`;
    notesList.innerHTML = "";

    tempNotes.forEach((note, index) => {
        let bgColor = "";
        let img = "";

        const isDark = document.body.classList.contains("dark-mode");

        if (note.priority == 1) {
            bgColor = isDark ? "#7b1c1c" : "#ffcccc";
            img = "image/safe.png";
        }
        if (note.priority == 2) {
            bgColor = isDark ? "#7b6000" : "#fff3cd";
            img = "image/virus.png";
        }
        if (note.priority == 3) {
            bgColor = isDark ? "#1a5c2a" : "#d4edda";
            img = "image/lock.png";
        }

        notesList.innerHTML += `
            <div class="note-item" style="background-color: ${bgColor}">
                <input type="checkbox" name="note" value="${index}">
                <img src="${img}" alt="" class="images">
                <div class="note-info">
                    <div class="note-title">${note.text}</div>
                    <div class="note-date">Priority: ${note.priority}</div>
                </div>
            </div>`;
    });
}
function isValid(){
	const text     = document.getElementById("noteText").value.trim();
    const priority = document.getElementById("prioritySelect").value;

    // التحقق من الأولوية
    if (!priority || priority === "-") {
        alert("Please select a priority level!");
        return false;
    }

    // التحقق من النص فاضي
    if (text.length === 0) {
        alert("Note description is empty!");
        return false;
    }

    // التحقق من طول النص
    if (text.length < 30) {
        alert("Note description is too short! Must be at least 30 characters.");
        return false;
    }
	return true;
}
function addNote() {
    const text     = document.getElementById("noteText").value.trim();
    const priority = document.getElementById("prioritySelect").value;
	
    if(isValid()){
    // نضيف للقائمة المؤقتة فقط
    const newNote = { text: text, priority: priority };
    tempNotes.push(newNote);

    // تصفية الفورم
    document.getElementById("noteText").value = "";
    document.getElementById("prioritySelect").value = "";

    // تحديث العرض
    loadNotes();
	}
	

}
function saveNotes() {
	const text     = document.getElementById("noteText").value.trim();
    const priority = document.getElementById("prioritySelect").value;
	
		if((text.length !== 0) || (priority && priority !== "-"))
			alert("Add the current note first before saving!");
		
		else
		alert("Notes saved successfully!"); 
	    localStorage.setItem("notes", JSON.stringify(tempNotes));

	
}
function deleteNotes() {
    const checked = document.querySelectorAll(
        ".notes-list input[type='checkbox']:checked"
    );

    if (checked.length === 0) {
        alert("Please select at least one note");
        return;
    }

    const confirmed = confirm(
        `Are you sure you want to delete ${checked.length} note(s)?`
    );

    if (!confirmed) return;

    const indicesToDelete = [];
    checked.forEach(cb => indicesToDelete.push(parseInt(cb.value)));

    indicesToDelete.sort((a, b) => b - a);
    indicesToDelete.forEach(i => tempNotes.splice(i, 1));

    localStorage.setItem("notes", JSON.stringify(tempNotes));
    loadNotes();
}


function handleThemeChange() {
    const observer = new MutationObserver(function() {
        loadNotes();
    });

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"]
    });
}


document.addEventListener("DOMContentLoaded", function () {

    loadNotes();
    handleThemeChange();

    // زر Delete
    document.getElementById("deleteForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            deleteNotes();
        });

    // زر Add → يضيف للقائمة بدون حفظ
    document.getElementById("addForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            addNote();
        });

    // زر Save → يحفظ كل النوتات الحالية
    document.getElementById("saveBtn")
        .addEventListener("click", function () {
            saveNotes();
        });
});