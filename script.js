let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wer hat die schnellste Laptime in Suzuka Japan?",
    answer_1: "Max Verstappen",
    answer_2: "Charles Leclerc",
    answer_3: "Lewis Hamilton",
    answer_4: "Artyon Senna ",
    right_answer: 1,
  },
  {
    question: "Wer ist der Burning Man?",
    answer_1: "Kevin Magnussen",
    answer_2: "Romain Grosjean",
    answer_3: "Lance Stroll",
    answer_4: "Fernando Alonso",
    right_answer: 2,
  },
  {
    question: "Wie viele Titel hat Lewis Hamilton?",
    answer_1: "4",
    answer_2: "7",
    answer_3: "8",
    answer_4: "6",
    right_answer: 2,
  },
];

let currentQuestion = 0;
let score = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showCurrentQuestion();
}

function showCurrentQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    showNextQuestion();
  }
}

function gameIsOver(){
  return currentQuestion >= questions.length;
}

function answer(answer) {
  let question = questions[currentQuestion];
  console.log("selected answer is,", answer);
  let selectedQuestionNumber = answer.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(answer).parentElement.classList.add("bg-success");
    score++;
  } else {
    document.getElementById(answer).parentElement.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentElement.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++; // z. B. von 0 auf 1
  document.getElementById("next-button").disabled = true; // um den button wieder zu deaktivieren
  document.getElementById("score-points").innerHTML = score;

  resetButtons();
  showCurrentQuestion();
}
function resetButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function resetGame() {
  rightQuestions = 0;
  currentQuestion = 0;
  init();
  showEndScreen();
}

function showEndScreen() {
  document.getElementById("endscreen").classList.toggle("d_none");
  document.getElementById("questionBody").classList.toggle("d_none");
}

function updateProgressBar() {
  let percent = currentQuestion / questions.length;
  percent = percent * 100;
  document.getElementById("progressbar").innerHTML = `${percent} %`;
  document.getElementById("progressbar").style.width = `${percent}%`;
}

function showNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("current-question").innerHTML = currentQuestion + 1;
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}
