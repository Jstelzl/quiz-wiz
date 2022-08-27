// Ids

var bodyEl = document.querySelectorAll("body");
var start = document.getElementById("start");
var buttonStart = document.getElementById("button-start");
var questions = document.getElementById("questions");
var questionSection = document.getElementById("question-section");
var questions = document.getElementById("questions");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var quizEnd = document.getElementById("quiz-end");
var userInitials = document.getElementById("user-initials");
var questionIndex;
var quizWizScore;
var questionContent = document.getElementById("question-content")


// Quiz Questions array
var questions = [
    {
        quizQuestion: "What is the highest belt rank you can receive in Brazilian Jiu Jitsu?",
        options: ["Purple", "White", "Green", "Scarlet"],
        answer: "Scarlet",
    },
    {
        quizQuestion: "In Brazilian Jiu Jitsu, how many degrees can you receive on any given belt below black belt?",
        options: ["2", "5", "10", "4" ],
        answer: "4",
    },
    {
        quizQuestion: "What family brought Jiu Jitsu from Japan to Brazil and made it what it is today?",
        options: ["Gracie Family", "Gichin Family", "Shihan Family", "Sauer Family"],
        answer: "Gracie Family",
    },
    {
        quizQuestion: "Who is considered the 'Father' of Brazilian Jiu Jitsu?",
        options: ["Pedo Sauer", "Carlos Gracie", "Helio Gracie", "Royce Gracie"],
        answer: "Helio Gracie",
    }
];

function questionDisplay() {

}

function initiateQuiz() {
    start.style.display = "none";
    qsection.style.display = "block";
    questionIndex = 0;
    quizWizScore = 0;

}