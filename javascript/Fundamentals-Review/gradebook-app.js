function getAverage(arr) {
  let total = 0;
  for (let score of arr) {
    total += score;
  }
  return total /= arr.length;
}

function getGrade(score) {
  let grade = "F";
  if (score === 100) {grade = "A+"}
  else if (score >= 90) {grade = "A"}
  else if (score >= 80) {grade = "B"}
  else if (score >= 70) {grade = "C"}
  else if (score >= 60) {grade = "D"}
  else {grade = "F"}

  return grade;
}

function hasPassingGrade(score) {
  const grade = getGrade(score);
  let hasPassed = false;
  if (grade !== "F") {
    hasPassed = true;
  }
  return hasPassed;
}

function studentMsg(arr, score) {
  const classAverage = getAverage(arr);
  const grade = getGrade(score);
  const hasPassed = hasPassingGrade(score);
  let msg = '';
  if (hasPassed) {
    msg = `Class average: ${classAverage}. Your grade: ${grade}. You passed the course.`;
  } else {
    msg = `Class average: ${classAverage}. Your grade: ${grade}. You failed the course.`;
  }
  return msg;
}