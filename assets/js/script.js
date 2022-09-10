// Ids

var bodyEl = document.querySelectorAll("body");
var start = document.getElementById("start-quiz");
var qsection = document.getElementById("qsection");
var questionTitle = document.getElementById("question-title");
var buttonStart = document.getElementById("button-start");
var questionsContainer = document.getElementById("questions-container");
var questionSection = document.getElementById("question-section");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var quizEnd = document.getElementById("quiz-end");
var questionContent = document.getElementById("question-content");
var clock = document.getElementById("clock");
var submitUserName = document.getElementById("submit-name");
var finalScreenAndScore = document.getElementById("final-screen");
var questionIndex;
var secondsLeft = 40;




// Quiz Questions array
var questions = [
    {
        quizQuestion: "What is the highest belt rank you can receive in Brazilian Jiu Jitsu?",
        options: ["Purple", "Black", "Green", "Scarlet"],
        answer: "Scarlet",
    },
    {
        quizQuestion: "In Brazilian Jiu Jitsu, how many degrees can you receive on any given belt below black belt?",
        options: ["2", "5", "10", "4" ],
        answer: "4",
    },
    {
        quizQuestion: "What family took Jiu Jitsu from Japan to Brazil to make it what it is today?",
        options: ["Gracie Family", "Gichin Family", "Shihan Family", "Sauer Family"],
        answer: "Gracie Family",
    },
    {
        quizQuestion: "Who is considered the 'Father' of Brazilian Jiu Jitsu?",
        options: ["Pedo Sauer", "Carlos Gracie", "Helio Gracie", "Royce Gracie"],
        answer: "Helio Gracie",
    }
];

// Start the quiz
function questionForm(event) {
    start.style.disply = "none";
    qsection.style.display = "block";
    quizEnd.style.display = "none";
    questionIndex = 0;
    userScore = 0;
    var timer = setTimer();
    questionDisplay();
    event.preventDefault();
}

// show questions/options on page
function questionDisplay() {
    questionTitle.textContent = questions[questionIndex].quizQuestion;
    answer1.textContent = questions[questionIndex].options[0];
    answer2.textContent = questions[questionIndex].options[1];
    answer3.textContent = questions[questionIndex].options[2];
    answer4.textContent = questions[questionIndex].options[3];
    console.log(answer1);
    event.preventDefault();
}



// confirms if questions are answered correctly or not
function answerConfirm(event) {
    console.log(event);
    if (event.target.className === "answer") {
        if(event.target.textContent === questions[questionIndex].answer) {
            console.log("correct");
         userScore += 10;
        } else {
            secondsLeft = secondsLeft -= 10;
            if (secondsLeft < 0) {
                endGame();
            }
        }
        questionIndex++;
        if (questionIndex === questions.length) {
            endGame();
        } else {
            questionDisplay();
        }
    }
}

//change display from questions to score
function endGame() {
    start.style.display = "none";
    quizEnd.style.display = "block";
    qsection.style.display = "none";
    event.preventDefault();
}

function finalScreen(event) {
    finalScreenAndScore.style.disply = "block";
    quizEnd.style.display = "none";
    var userInitials = document.getElementById("user-initials").value;
    document.getElementById("show");
    document.getElementById("user-score").textContent = userInitials + "Your Score Was " + userScore;
    event.preventDefault();
}
 

//timer
function setTimer() {
    var countdown = setInterval(function() {
        secondsLeft--;
        clock.textContent = secondsLeft

        if (secondsLeft === 0) {
            clearInterval(countdown);
            endGame();
        }
    }
    ,1000);
}



buttonStart.addEventListener("click", questionForm);
qsection.addEventListener("click", answerConfirm);
submitUserName.addEventListener("click", finalScreen);