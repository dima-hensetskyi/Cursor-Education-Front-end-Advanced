const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function breakIntoPairs(arrStudents) {
    const copyArrStudents = [...arrStudents];
    const result = [
        [copyArrStudents[0], copyArrStudents[2]],
        [copyArrStudents[1], copyArrStudents[3]],
        [copyArrStudents[4], copyArrStudents[5]]
    ];
    return result;
}

function setThemsForStudens(arrStudentsPairs, arrThemes) {
    const result = [];
    for (let i = 0; i < arrStudentsPairs.length; i++) {
        result.push(arrStudentsPairs[i].concat(arrThemes[i]));
    }
    return result;
}

function setMark(arrStudents, arrMarks) {
    const result = [];
    for (let i = 0; i < arrStudents.length; i++) {
        result.push([arrStudents[i], (arrMarks[i])]);
    }
    return result;
}

function setMarkRandom(arrStudentsPairs, arrThemes, arrMarks) {
    const randomMarksIndex = () => Math.floor(Math.random() * arrMarks.length)
    const randomThemesIndex = () => Math.floor(Math.random() * arrThemes.length)
    const result = [];
    for (let i = 0; i < arrStudentsPairs.length; i++) {
        result.push(arrStudentsPairs[i].concat(arrThemes[randomThemesIndex()], arrMarks[randomMarksIndex()]));
    }
    return result;
}

const breakStudentIntoPairs = breakIntoPairs(students);
console.log(breakStudentIntoPairs);

const setThems = setThemsForStudens(breakStudentIntoPairs, themes);
console.log(setThems);

const setMarkForStudent = setMark(students, marks);
console.log(setMarkForStudent);

const setMarkForStudentRandom = setMarkRandom(breakStudentIntoPairs, themes, marks);
console.log(setMarkForStudentRandom);
console.log(students);
console.log(themes);
console.log(marks);