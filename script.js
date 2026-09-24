const addSubjectBtn = document.getElementById("addSubjectBtn");
const subjectsContainer = document.getElementById("subjectsContainer");

addSubjectBtn.addEventListener("click", function () {

    const subjectRow = document.createElement("div");

    subjectRow.className = "subject-row";

    subjectRow.innerHTML = `
        <input type="text" placeholder="Subject Name">

        <input type="number" placeholder="Credits" min="1">

        <input type="number" placeholder="Marks" min="0" max="100">
    `;

    subjectsContainer.appendChild(subjectRow);
});
