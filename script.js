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
    answer_1: "7",
    answer_1: "8",
    answer_1: "6",
    right_answer: 1,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showCurrentQuestion();
}

function showCurrentQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_"];
}
