const question1 = {
  category: "1",
  question: "How many pickles are in this jar?",
  choices: ["5", "2", "3"],
  answer: "5"
}
const question2 = {
  category: "2",
  question: "how many cucumbers are in this jar?",
  choices: ["6", "2", "9"],
  answer: "6"
}
const question3 = {
  category: "3",
  question: "how many classes do i have this semister?",
  choices: ["4", "2", "7"],
  answer: "4"
}
const question4 = {
  category: "4",
  question: "whats the first letter in welcome?",
  choices: ["w", "y", "p"],
  answer: "w"
}
const question5 = {
  category: "5",
  question: "hello whats my name?",
  choices: ["devon", "matt", "william"],
  answer: "devon"
}

const questions = [question1, question2, question3, question4, question5];

function getRandomQuestion(arr) {
  const randomIndex = Math.floor(Math.random() * ((arr.length - 1) + 1));
  return arr[randomIndex];
}
function getRandomComputerChoice(availableChoices) {
  const randomIndex = Math.floor(Math.random() * ((availableChoices.length - 1) + 1));
  return availableChoices[randomIndex];
}
function getResults(questionObject, computerChoice) {
  if (questionObject.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
console.log(randomQuestion);
const choice = getRandomComputerChoice(randomQuestion.choices)
console.log(choice);
console.log(getRandomComputerChoice(randomQuestion.choices));
const result = getResults(randomQuestion, choice);
console.log(result);
