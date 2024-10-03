// Array to store 20 students with initial data
const students = [
  { id: 1, name: "Student 1", grade: 90 },
  { id: 2, name: "Student 2", grade: 85 },
  { id: 3, name: "Student 3", grade: 78 },
  { id: 4, name: "Student 4", grade: 92 },
  { id: 5, name: "Student 5", grade: 88 },
  { id: 6, name: "Student 6", grade: 72 },
  { id: 7, name: "Student 7", grade: 66 },
  { id: 8, name: "Student 8", grade: 59 },
  { id: 9, name: "Student 9", grade: 91 },
  { id: 10, name: "Student 10", grade: 79 },
  { id: 11, name: "Student 11", grade: 82 },
  { id: 12, name: "Student 12", grade: 95 },
  { id: 13, name: "Student 13", grade: 68 },
  { id: 14, name: "Student 14", grade: 77 },
  { id: 15, name: "Student 15", grade: 84 },
  { id: 16, name: "Student 16", grade: 60 },
  { id: 17, name: "Student 17", grade: 86 },
  { id: 18, name: "Student 18", grade: 53 },
  { id: 19, name: "Student 19", grade: 72 },
  { id: 20, name: "Student 20", grade: 83 },
];

// Function to determine the letter grade
const determineLetterGrade = (grade) => {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 81) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
};

// Create an object to count how many students have each letter grade
const gradeDistribution = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0,
};

// Function to calculate the average grade
const calculateAverageGrade = (students) => {
  const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
  return (totalGrades / students.length).toFixed(2);
};

// Assign letter grades to each student, count distribution, and display their results
students.forEach((student) => {
  student.letterGrade = determineLetterGrade(student.grade);
  gradeDistribution[student.letterGrade]++;
  console.log(
    `Student: ${student.name}, Grade: ${student.grade}, Letter Grade: ${student.letterGrade}`
  );
});

// Calculate the average grade and determine its corresponding letter grade
const averageGrade = calculateAverageGrade(students);
const averageLetterGrade = determineLetterGrade(averageGrade);

// Display the average grade and its letter grade
console.log(
  `\nThe average grade for all students is: ${averageGrade} (${averageLetterGrade})`
);

// Output the grade distribution
console.log("\nGrade distribution:");
console.log(`A: ${gradeDistribution.A} students`);
console.log(`B: ${gradeDistribution.B} students`);
console.log(`C: ${gradeDistribution.C} students`);
console.log(`D: ${gradeDistribution.D} students`);
console.log(`F: ${gradeDistribution.F} students`);
