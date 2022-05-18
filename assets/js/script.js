const startButton = document.querySelector(".start-btn")
const nextButton = document.querySelector(".next-btn")
const prevButton = document.querySelector(".prev-btn")
const questionIndex = 0;


// questions for quiz
const questionsArr = [
    
    {
        question: 'Arrays in Javascript can be used to store:',
        options: ['Booleans','Numbers and Strings','Other Arrays','All of the above',],
        answer: 'All of the above',
    },
    {
        question: 'Commonly used Data types DO NOT include?',
        options: ['Strings','Boolean','Numbers','Alerts',],
        answer: 'Boolean',
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables',
        options: ['Commas','Curly Brackets','Quotes','Parenthesis',],
        answer: 'Curly Brackets',
    },
    {
        question: 'A very useful tool used during development and debugging for prinitng content to the debugger',
        options: ['Javascript','Terminal/Bash','For loops','Console.log',],
        answer: 'For Loops',
    },
]

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    gameOver = false;
    questionIndex = 0;
    startButton.style.display = 'none'
}



function selectOption() {

}

nextButton.addEventListener('click', nextQuestion)

function nextQuestion() {
    questionArr ++;
    if (questionArr >= questionsArr.options.length){
        endGame();
    } else {
        showQuestions(questionArr);
    }
 
    return;
}

function endGame() {
    gameEnded = true;
}

function showQuestions(currentQuestions) {
    titleTag.textContent = questionsArr.options[currentQuestions];
    createAnswer(currentQuestions);
    return;
}
    







