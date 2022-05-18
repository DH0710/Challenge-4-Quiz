const startButton = document.querySelector("start-btn")
const nextButton = document.querySelector("next-btn")
const prevButton = document.querySelector("prev-btn")


const questions = [
    {
        question: 'Arrays in Javascript can be used to store:',
        option1: 'Booleans',
        option2: 'Numbers and Strings',
        option3: 'Other Arrays',
        option4: 'All of the above',
        rightAnswer: 'All of the above',
    },
    {
        question: 'Commonly used Data types DO NOT include?',
        option1: 'Strings',
        option2: 'Boolean',
        option3: 'Numbers',
        option4: 'Alerts',
        rightAnswer: 'Boolean',
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables',
        option1: 'Commas',
        option2: 'Curly Brackets',
        option3: 'Quotes',
        option4: 'Parenthesis',
        rightAnswer: 'Curly Brackets',
    },
    {
        question: 'A very useful tool used during development and debugging for prinitng content to the debugger',
    option1: 'Javascript', 
    option2: 'Terminal/Bash',
    option3: 'For loops', 
    option4: 'Console.log', 
    rightAnswer: 'For Loops', 
    
    },
]

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    nextQuestion()
}



function selectOption() {

}

nextButton.addEventListener('click', nextQuestion)

function nextQuestion() {
    questions

}





