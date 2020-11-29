const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function breakIntoPairs(arrStudents) {
    const copyArrStudents = [...arrStudents];
    return [
        [copyArrStudents[0], copyArrStudents[2]],
        [copyArrStudents[1], copyArrStudents[3]],
        [copyArrStudents[4], copyArrStudents[5]]
    ];
}

function setThemsForStudens(arrStudentsPairs, arrThemes) {
    return arrStudentsPairs.map((arrStudent, index) => [arrStudent.join(" і "), arrThemes[index]]);
}

function setMark(arrStudents, arrMarks) {
    return arrStudents.map((student, index) => [student, arrMarks[index]]);
}

function setMarkRandom(arrStudentsPairs, arrThemes, arrMarks) {
    const randomMarksIndex = () => Math.floor(Math.random() * arrMarks.length)
    const randomThemesIndex = () => Math.floor(Math.random() * arrThemes.length)
    return arrStudentsPairs.map(studentsPair => [studentsPair.join(" і "), arrThemes[randomThemesIndex()], arrMarks[randomMarksIndex()]]);
}

const breakStudentIntoPairs = breakIntoPairs(students);
console.log(breakStudentIntoPairs);

const setThems = setThemsForStudens(breakStudentIntoPairs, themes);
console.log(setThems);

const setMarkForStudent = setMark(students, marks);
console.log(setMarkForStudent);

const setMarkForStudentRandom = setMarkRandom(breakStudentIntoPairs, themes, marks);
console.log(setMarkForStudentRandom);