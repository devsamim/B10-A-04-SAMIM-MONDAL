function calculateFinalScore(obj) {
  // Check if the input is an object
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  // Calculate total score by adding test score and school grade
  let totalScore = obj.testScore + obj.schoolGrade;
  
  // Add 20 to the total score if the student is from the specified family
  if (obj.isFFamily) {
    totalScore += 20;
  }

  // Return true if the total score is greater than 80, otherwise false
  return totalScore > 80;
}

// Define the student objects outside the function
const studentPoint1 = { 
  name: 'Rajib',
  testScore: 45, 
  schoolGrade: 25,
  isFFamily: true 
};

const studentPoint2 = { 
  name: 'Rajib',
  testScore: 45, 
  schoolGrade: 25,
  isFFamily: false 
};

// Test the function with student objects
console.log(calculateFinalScore(studentPoint1));  // Output: true (total score: 90)
console.log(calculateFinalScore(studentPoint2));  // Output: false (total score: 70)
