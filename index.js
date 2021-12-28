var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

var questions = [{
  question: "IIT\na. Institute for Indian Technology\nb. Indian Institute of Technology \nc. Invention of Indian Technology\n",
  answer: "b"
}, {
  question: "GATE\na. Graduate Aptitude Technical Entrance\nb. Graduate Advanced Technology Examination\nc. Graduate Aptitude Test in Engineering\n",
  answer: "c"
},
{
  question: "HPCL\na. Hindustan Petroleum Corporation Ltd.\nb. Hindustan Petrochemical Company Ltd.\nc. Hindustan Petrol and Coal Ltd.\n",
  answer: "a"
},
{
  question: "ISRO\na. Institute for Space Research Observation\nb. Indian Space Research Organisation \nc. Indian Science Research Organization \n",
  answer: "b"
},
{
  question: "ESE\na. Engineering Services Entrance\nb. Engineering Services Evaluation\nc. Engineering Services Examination\n",
  answer: "c"
},
{
  question: "KVPY\na. Kishore Vaigyanik Protsahan Yojana\nb. Kishore Vigyan Pariksha Yojana\nc. Kamyab Vaigyanik Prakash Yogyta\n",
  answer: "a"
}];

var userName = readlineSync.question(chalk.cyan("What is your Name? "));
console.log(chalk.cyan("Welcome!! " + chalk.yellow.bold(userName)));
console.log(chalk.magenta("It's a Quiz based upon some common abbreviations!\n"));
console.log(chalk.red.bold('Guess the full form of given abbreviations!'));

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("Great, Right Answer! "));
    score = score + 1;
  } else
    console.log(chalk.red("Wrong Answer! "));
  console.log(chalk.blue("Current score: " + score));
  console.log(chalk.yellow("------------------------"));
}

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.cyan("You SCORED: "+ score));

var highScore = [
  {
    name: "Pushpendra",
    score: 6,
  }]

for (var i = 0; i < highScore.length; i++) {
  if (score >= highScore[i].score) {
    console.log(chalk.green("YAY! You beat high score "));
  } else {
    console.log(chalk.red("You didn't beat high score"));
  }
}

console.log(chalk.blue("HighScore: "));
console.log(chalk.yellow("Pushpendra : 7"));
console.log("Check out the high scores, if you should be there ping me and I'll update it");
