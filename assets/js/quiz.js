var startButtonElement = document.querySelector(".start-btn");
var questionContainerElement = document.querySelector('#container'); 

var answerElement = document.querySelector("#question-opt");
var homeElement = document. querySelector(".home");

var endElement = document.querySelector("#scores");

var currentIndex = 0;
var score=0;
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
 homeElement.style.display = "none";
 endElement.style.display = "none";
 showQuestion(0);
 var countDownTimer = setInterval(function() {
     if(totalTime <= 0 || currentIndex === 5){
         clearInterval(countDownTimer);
     document.getElementById("timer").textContent = "Quiz Finished!";
         endQuiz();
     } else {
        document.getElementById("timer").textContent = totalTime;
     }
     totalTime--;
 },1000);
        
 };

 function showQuestion(index) {
    endElement.style.display = "none";
     if(totalTime > 0){
        document.querySelector("#question").textContent = questions[index].question
         answerElement.innerHTML = "";
         for (var i = 0; i<questions[index].choices.length; i++){
         var opt = document.createElement("button");
         opt.setAttribute("class", "option-button");
         opt.setAttribute("value", questions[index].choices[i]);
         opt.textContent = questions[index].choices[i];
         opt.onclick = showAnswer;
         answerElement.appendChild(opt);    
         };
         
        }else{
             endQuiz();
         }
     };
 
function showAnswer() {
    if( event.target.value != questions[currentIndex].correctChoice) {
        window.alert("Incorrect! 10 seconds deducted");
        totalTime = totalTime - 10;
    } else {
        window.alert("Correct!")
        
    }
    currentIndex++;
    if (currentIndex <= 4) {
        showQuestion(currentIndex);
    } else {
        endQuiz();
    }
};


function endQuiz() {
    score = totalTime;
    answerElement.style.display = "none";
    questionContainerElement.innerHTML = "";
    endElement.style.display = "inherit";
    document.getElementById("finalScore").textContent = score;
    
};

function viewHighScore() {

};

 