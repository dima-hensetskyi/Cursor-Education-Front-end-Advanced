const students = [
    {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4]
        }
    }, {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5]
        }
    }, {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5]
        }
    }];

function getSubjects({ subjects }) {
    return Object.keys(subjects).map((subjName) =>
        subjName[0].toUpperCase() + subjName.slice(1).toLowerCase().split("_").join(" "));
}

function getAverageMark({ subjects }) {
    const markLength = Object.values(subjects).reduce((totalLength, markSubj) => {
        return totalLength += markSubj.length;
    }, 0)

    const sumMark = Object.values(subjects).reduce((total, markSubj) => {
        const sumMarkSubj = markSubj.reduce((sum, number) => {
            return sum += number;
        }, 0)
        return total += sumMarkSubj;
    }, 0);

    return +(sumMark / markLength).toFixed(2);
}

function getStudentInfo(student) {
    const { name, course } = student;
    return { course, name, averageMark: getAverageMark(student) }
}

const getStudentsNames = (students) => (students.map(({ name }) => name)).sort();

function getBestStudent(students) {
    const sortByMark = (arr) => arr.sort((a, b) => b.averageMark - a.averageMark);
    const arrStudents = students.map(student => getStudentInfo(student));
    const sortStudentsByMark = sortByMark(arrStudents);
    return sortStudentsByMark[0].name;
}

function calculateWordLetters(word) {
    const arrayLetters = word.toLowerCase().split("");
    let calculete = {};
    arrayLetters.map(letter => calculete.hasOwnProperty(letter) ? calculete[letter] += 1 : calculete[letter] = 1);
    return calculete;
}

console.log(`
Функція №1 getSubjects(students[0]) --> ${getSubjects(students[0])};
Функція №2 getAverageMark(students[0]) --> ${getAverageMark(students[0])};
Функція №3 getStudentInfo(students[0]) -->`)
console.log(getStudentInfo(students[0]))
console.log(`Функція №4 getStudentsNames(students) --> ${getStudentsNames(students)}
Функція №5 getBestStudent(students) --> ${getBestStudent(students)};
Функція №6 calculateWordLetters("тест") --> `)
console.log(calculateWordLetters("тест"));

