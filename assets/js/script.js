var highscore = document.getElementById("Highscores-Screen");
var QuestionsEl = document.getElementById("Questions");
var startBtn = document.getElementById("startbtn");
var beginEl = document.getElementById("inner");
var choices = document.getElementById("choices");
var currentQuestion = 0;
var score = 0;
var questionchoice = document.getElementById("Question-choices");
var questionAnswer1 = document.getElementById("choice 1");
var questionAnswer2 = document.getElementById("choice 2");
var questionAnswer3 = document.getElementById("choice 3");
var questionAnswer4 = document.getElementById("choice 4");
var answerEl = document.getElementById("answer");
var timeLeft = 90;
var timerEl = document.getElementById("timer");
var header = document.getElementById("header");
var scorestore = document.getElementById("scorestore");
var back = document.getElementById("back");
var clear = document.getElementById("clear");
var scores = document.getElementById("scores");
var initials = document.getElementById("initials");
var submitscore = document.getElementById("Assessment-Done");
var timerId;
var Questions = [
    {
      question: " What adds functionality and interactivity to a webpage?",
      options: ["1. JavaScript", "2. HTML", "3.HTTPS", "4. jQuery"],
      answer: "1. JavaScript",
    },
  
    {
      question: "The condition in an if/else statement is enclosed with _____.",
      options: [
        "1. square brackets",
        "2. parenthesis",
        "3. curly brackets",
        "4. quotes",
      ],
      answer: "3. curly brackets",
    },
  
    {
      question: "A Javascript function is executed when something ____ it?",
      options: ["1. provokes", "2. beckons", "3. pushes", "4. invokes"],
      answer: "4. invokes",
    },
  
    {
      question: "Which command does not create a variable",
      options: ["1. const", "2. let", "3. var", "4. DOM"],
      answer: "4. DOM",
    },
  ];

function startQuiz() {
  beginEl.setAttribute("class", "hide");
  QuestionsEl.removeAttribute("class");
}

function updateQuestion() {
  questionchoice.textContent = Questions[currentQuestion].question;
  questionAnswer1.textContent = Questions[currentQuestion].options[0];
  questionAnswer2.textContent = Questions[currentQuestion].options[1];
  questionAnswer3.textContent = Questions[currentQuestion].options[2];
  questionAnswer4.textContent = Questions[currentQuestion].options[3];
}

startBtn.addEventListener("click", function (event) {
  startBtn.classList.add("hide");
  QuestionsEl.classList.remove("hide");
  updateQuestion();
});

questionAnswer1.addEventListener("click", function (event) {
  var clicked = questionAnswer1.innerHTML;
  if (clicked === Questions[currentQuestion].answer) {
    answerEl.textContent = "Correct!";
    score = score + 1;
  } else {
    answerEl.textContent = "Wrong!";
    timeLeft -= 10;
  }
  if (currentQuestion >= Questions.length - 1) {
    console.log("quiz is over");
    currentQuestion = 0;
    displayScore(score);
  } else {
    currentQuestion += 1;
    updateQuestion();
  }
});

questionAnswer2.addEventListener("click", function (event) {
  var clicked = questionAnswer2.innerHTML;
  if (clicked === Questions[currentQuestion].answer) {
    answerEl.textContent = "Correct!";
    score = score + 1;
  } else {
    answerEl.textContent = "Wrong!";
    timeLeft -= 10;
  }
  if (currentQuestion >= Questions.length - 1) {
    console.log("quiz is over");
    currentQuestion = 0;
    displayScore(score);
  } else {
    currentQuestion += 1;
    updateQuestion();
  }
});

questionAnswer3.addEventListener("click", function (event) {
  var clicked = questionAnswer3.innerHTML;
  if (clicked === Questions[currentQuestion].answer) {
    answerEl.textContent = "Correct!";
    score = score + 1;
  } else {
    answerEl.textContent = "Wrong!";
    timeLeft -= 10;
  }
  if (currentQuestion >= Questions.length - 1) {
    console.log("quiz is over");
    currentQuestion = 0;
    displayScore(score);
  } else {
    currentQuestion += 1;
    updateQuestion();
  }
});

questionAnswer4.addEventListener("click", function (event) {
  var clicked = questionAnswer4.innerHTML;
  if (clicked === Questions[currentQuestion].answer) {
    answerEl.textContent = "Correct!";
    score = score + 1;
  } else {
    answerEl.textContent = "Wrong!";
    timeLeft -= 10;
  }
  if (currentQuestion >= Questions.length - 1) {
    console.log("quiz is over");
    currentQuestion = 0;
    displayScore(score);
  } else {
    currentQuestion += 1;
    updateQuestion();
  }
});

// function startTimer() {
//     timerEl = setInterval(clockTick, 1000)
//     {
//     timerEl.textContent = time;

// if (timeLeft < 0) {
//     displayScore(score);
//     clearInterval(timeInterval);
// } 1000;}

// getQuestion();

// var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// }

function getQuestion() {
  var currentQuestion = Questions[currentQuestion];
  QuestionsEl.textContent = currentQuestion;
  questionAnswer1.textContent = Questions[currentQuestion].choices[0];
  questionAnswer2.textContent = Questions[currentQuestion].choices[1];
  questionAnswer3.textContent = Questions[currentQuestion].choices[2];
  questionAnswer4.textContent = Questions[currentQuestion].choices[3];
}

// startBtn.onclick = startTimer

// function clockTick() {
//     time--;
//     timerEl.textContent = time;

//     if (time <= 0) {
//       quizEnd();
//     }
//   }

var submitBtn = document.getElementById("submit")

function displayScore(score) {
  QuestionsEl.classList.add("hide");
  submitscore.classList.remove("hide");
  document.getElementById("score").innerHTML = 'Your score: ' + score
}

submitBtn.addEventListener("click", function() {
  var person = initials.value;
  console.log({person, score})
})



// function scorestore(s) {
//     submitscore.classList.add("hide");
//     highscore.classList.remove("hide")
// }
