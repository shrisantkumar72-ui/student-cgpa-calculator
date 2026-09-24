const addSubjectBtn = document.getElementById("addSubjectBtn");
const subjectsContainer = document.getElementById("subjectsContainer");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");


// Add Subject
addSubjectBtn.addEventListener("click", function () {

    const subjectRow = document.createElement("div");

    subjectRow.className = "subject-row";

    subjectRow.innerHTML = `
        <input type="text" placeholder="Subject Name">

        <input type="number"
               placeholder="Credits"
               min="1">

        <input type="number"
               placeholder="Marks"
               min="0"
               max="100">
    `;

    subjectsContainer.appendChild(subjectRow);
});


// Convert Marks to Grade Point
function getGradePoint(marks) {

    if (marks >= 90) {
        return 10;
    } 
    else if (marks >= 80) {
        return 9;
    } 
    else if (marks >= 70) {
        return 8;
    } 
    else if (marks >= 60) {
        return 7;
    } 
    else if (marks >= 50) {
        return 6;
    } 
    else if (marks >= 40) {
        return 5;
    } 
    else {
        return 0;
    }
}


// Calculate SGPA
calculateBtn.addEventListener("click", function () {

    const rows = document.querySelectorAll(".subject-row");

    let totalCredits = 0;
    let totalPoints = 0;
    let totalMarks = 0;

    rows.forEach(function(row) {

        const inputs = row.querySelectorAll("input");

        const credits = Number(inputs[1].value);
        const marks = Number(inputs[2].value);

        if (credits > 0 && marks >= 0) {

            const gradePoint = getGradePoint(marks);

            totalCredits += credits;

            totalPoints += credits * gradePoint;

            totalMarks += marks;
        }
    });


    if (totalCredits === 0) {
        alert("Please enter subject credits and marks.");
        return;
    }


    const sgpa = totalPoints / totalCredits;

    const percentage = totalMarks / rows.length;


    document.getElementById("sgpa").textContent =
        sgpa.toFixed(2);

    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";


    let overallGrade;

    if (sgpa >= 9) {
        overallGrade = "A+";
    }
    else if (sgpa >= 8) {
        overallGrade = "A";
    }
    else if (sgpa >= 7) {
        overallGrade = "B+";
    }
    else if (sgpa >= 6) {
        overallGrade = "B";
    }
    else if (sgpa >= 5) {
        overallGrade = "C";
    }
    else {
        overallGrade = "F";
    }

    document.getElementById("overallGrade").textContent =
        overallGrade;
});


// Reset
resetBtn.addEventListener("click", function () {

    location.reload();

});
