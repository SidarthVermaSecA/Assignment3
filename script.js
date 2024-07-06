const quizData = [  //starting by putting all the questions in an object
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

//getting all the required elements from html structure

const questionElement = document.getElementById("question");
const options = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const progressBar = document.getElementById("progress");
const scoreCount = document.getElementById("score");
const container = document.getElementsByClassName("container");

//initializing question counter and score for later operations
let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = [currentQuestion.valueOf()+1] + ". " + question.question  ;  //giving serial number to the questions

  options.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    options.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(selectedOption) { //checking if the option targeted (clicked) is correct or not, if it is, adding it to the score
  const selectedButton = selectedOption.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
    scoreCount.innerText = score + "/8";
  }

  currentQuestion++;
  progressBar.setAttribute("value",currentQuestion.valueOf()); //progressing the value of progress bar to match with number of questions left

  if (currentQuestion < quizData.length) {
    showQuestion();
  } if (currentQuestion == 8){
    showResult();
  }
}

function showResult() {
  submitBtn.style.visibility = "visible"; //showing submit button after answering the last question
  myQuiz.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p style="text-align:center;  text-decoration: underline;">Your score: ${score}/${quizData.length}</p>  //displaying score
  `;
}
 
showQuestion()
  
