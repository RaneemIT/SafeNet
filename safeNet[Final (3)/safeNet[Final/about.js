const teachersList = document.getElementById("teachersList");
const sortTeachers = document.getElementById("sortTeachers");

if (teachersList && sortTeachers) {

  
  const teacherCards = Array.from(
    teachersList.querySelectorAll(".teacher-card")
  );

  
  function shuffle(cards) {
    let shuffled = [...cards];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  
  function display(cards) {
    teachersList.innerHTML = "";
    cards.forEach(card => teachersList.appendChild(card));
  }

  
  function getName(card) {
    return card.querySelector(".name").textContent
      .trim()
      .toLowerCase();
  }

  
  function getExp(card) {
    return parseInt(
      card.querySelector(".exp").textContent
    );
  }

  // أول ما تفتح الصفحة → random
  display(shuffle(teacherCards));

  
  sortTeachers.addEventListener("change", function () {

    let sorted = [...teacherCards];

    if (this.value === "name-asc") {
      sorted.sort((a, b) => getName(a).localeCompare(getName(b)));

    } else if (this.value === "name-desc") {
      sorted.sort((a, b) => getName(b).localeCompare(getName(a)));

    } else if (this.value === "exp-asc") {
      sorted.sort((a, b) => getExp(a) - getExp(b));

    } else if (this.value === "exp-desc") {
      sorted.sort((a, b) => getExp(b) - getExp(a));

    } else {
      sorted = shuffle(teacherCards);
    }

    display(sorted);
  });

}