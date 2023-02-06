/* Practice 3 - Create an algorithm that, given the 3 grades of a student in a semester in college, calculates and prints the average and shows the grade of this student. If the average is lower than 5, the student failed; if the average is between 5 and 7, the student went to remedial; finally, the student passed if the average is above 7. */

const grade01 = 4;
const grade02 = 8;
const grade03 = 10;

let avgGrade = (grade01 + grade02 + grade03)/3;

if (avgGrade < 5) {
    console.log("The student failed the semester, because his/her final grade was" + avgGrade.toFixed(2) + ".");
} else if (avgGrade >5 && avgGrade <7) {
    console.log("The student was in exam this semester, as his/her final grade was " + avgGrade.toFixed(2) + ".");
} else {
    console.log("The student passed the semester, as his final grade was " + avgGrade.toFixed(2) + ".");
}