var startButtonElement = document.querySelector(".start-btn");
var questionContainerElement = document.querySelector('#question-container');
var questionElement = document.querySelector("#question");
var answerElement = document.querySelector("#question-opt");
var homeElement = document. querySelector(".home")
var currentIndex = 0;

var totalTime = 75;

const questions = [
    {
    question: "Commonly used data types do NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctChoice: "Alerts"
},
{
    question: "The condition in an if/else statement is enclosed in:",
    choices: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],
    correctChoice: "Parenthesis"
},
{
    question: "Arrays in JavaScript can be used to store:",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
    correctChoice: "All of the above"
},
{
    question: "String values must be enclosed within ______ when being assigned to variables",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    correctChoice: "Quotes"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal Bash", "for loops", "console.log"],
    correctChoice: "console.log"
}
];

startButtonElement.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("started");
    if(totalTime > 0) {
        answerElement.textContent = questions[index].question
    }
    questionContainerElement.classList.remove('hide');

    setnextQuestion();
}

function setnextQuestion() {
    showQuestion([currentIndex])

}
function showQuestion(question){
    questionElement.innerText = question.question
}
 function selectAnswer() {

 }

 

 
 