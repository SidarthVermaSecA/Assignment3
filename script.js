const quizData = [
    {
      question: "What is the full form of HTML?",
      options: ["Hyper Text Markdown Language", "Hyper thinking Markup Language", "Hyper Talking Mixed Language", "Hyper Text Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "What is CSS used for?",
      options: ["logic building", "styling", "page structure", "none of the above"],
      answer: "styling"
    },
    {
        question: "How many continents in the world?",
        options: ["7", "8", "9", "10"],
        answer: "7"
      },
      {
        question: "Easiest course in CPAN? ",
        options: ["134", "112", "133", "None of the above"],
        answer: "None of the above"
      },
      {
        question: "8+10?",
        options: ["18", "19", "-2", "0"],
        answer: "18"
      },
      {
        question: "3 to the power of 3?",
        options: ["12", "9", "27", "30"],
        answer: "27"
      },
      {
        question: "Synonym for happy",
        options: ["laughter", "terrible", "sad", "joy"],
        answer: "joy"
      },
      {
        question: "Which planet do we live on?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: "Earth"
      },
  ];
  
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const progressBar = document.getElementById("progress");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = [currentQuestion.valueOf()+1] + ". " + question.question  ;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }


  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
  `;
}

showQuestion()