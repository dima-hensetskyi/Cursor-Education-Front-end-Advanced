const student = new BudgetStudents("Львівська Політехніка", 6, "Остап Бендер");
console.log(student.getInfo);
console.log(student.getMarks);
student.setMark = 5;
console.log(student.getMarks);
console.log(`Cередня оцінка ${student.getAverageMarks}`);
student.dismiss();
console.log(student.getInfo);
console.log(student.getMarks);
student.setMark = 5;
console.log(student.getMarks);
student.recovery();