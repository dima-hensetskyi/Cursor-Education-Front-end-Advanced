class Students {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = Array.from({ length: 4 }, () => Math.floor(Math.random() * 5) + 1);
        this.isDismiss = false;
    }

    get getInfo() { return this.isDismiss ? null : `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}` };

    get getMarks() {
        if (this.isDismiss) {
            return null;
        } else {
            return this.marks.length ? this.marks : `${this.fullName} не має оцінок`
        }
    }

    set setMark(mark = 5) {
        if (this.isDismiss) {
            return null;
        } else if (Number.isInteger(mark) && mark <= 5 && mark > 0) {
            return this.marks.push(mark);
        } else {
            console.log("mark is not correct");
        }
    }

    get getAverageMarks() {
        if (this.isDismiss) {
            return null;
        } else if (this.marks.length) {
            return +((this.marks.reduce((total, mark) => total + mark, 0) / this.marks.length).toFixed(2));
        } else {
            console.log(`${this.fullName} не має оцінок`);
        }
    }

    dismiss() {
        console.log(`Студент ${this.fullName} відрахований`);
        this.isDismiss = true;
    }
    recovery() {
        console.log(`Студент ${this.fullName} поновлений`);
        this.isDismiss = false;
    }
}

class BudgetStudents extends Students {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.markForMoney = 4;
        this.scholarshipAmount = 1400;
        this.scholarship = this.startScholarship();

    }
    getScholarship = () => this.check() ? 
    console.log(`Ваш середній бал - ${this.getAverageMarks}, тому ви отримали стипендію у розмірі ${this.scholarshipAmount} грн.`) : false;

    startScholarship = () => setInterval(() => this.getScholarship(), 30000);

    check() {
        if (this.isDismiss) {
            console.log(`Студент ${this.fullName} відрахований`);
            return false;
        } else if (this.getAverageMarks < this.markForMoney) {
            console.log(`Для отримання стипендії середня оцінка повинна бути більше 4. Середній бал cтудента ${this.fullName} - ${this.getAverageMarks}`);
            return false;
        } else {
            return true;
        }
    }
}