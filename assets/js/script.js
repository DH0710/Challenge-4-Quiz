const startButton = document.querySelector(".start-btn")
const nextButton = document.querySelector(".next-btn")
const prevButton = document.querySelector(".prev-btn")
const questionArr = 0;


// questions array for quiz
const questionsArr = [

    {
        question: 'Arrays in Javascript can be used to store:',
        options: ['Booleans', 'Numbers and Strings', 'Other Arrays', 'All of the above',],
        answer: 'All of the above',
    },
    {
        question: 'Commonly used Data types DO NOT include?',
        options: ['Strings', 'Boolean', 'Numbers', 'Alerts',],
        answer: 'Boolean',
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables',
        options: ['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis',],
        answer: 'Curly Brackets',
    },
    {
        question: 'A very useful tool used during development and debugging for prinitng content to the debugger',
        options: ['Javascript', 'Terminal/Bash', 'For loops', 'Console.log',],
        answer: 'For Loops',
    },
]

startButton.addEventListener('click', startQuiz)

// starts quiz
function startQuiz() {
    startButton 
    gameOver = false;
    startButton.style.display = 'none';
    showQuestions(questionsArr);
    return;
}

function showQuestions(currentQuestions) {
    titleTag.textContent = questionsArr.options[currentQuestions];
    createAnswer(currentQuestions);
    return;
}

function createAnswer(currentQuestions) {
    answerButtonList.innerHTML = '';
}


nextButton.addEventListener('click', nextQuestion)

function nextQuestion() {
    if (questionsArr >= questionsArr.options.length) {
        endGame();
    } else {
        showQuestions(questionsArr);
    }

    return;
}

function endGame() {
    gameOver = true;
}









