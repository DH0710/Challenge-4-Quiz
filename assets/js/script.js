const startButton = document.querySelector("start-btn")
const nextButton = document.querySelector("next-btn")
const prevButton = document.querySelector("prev-btn")


const questions = [
    {
        question: 'Arrays in Javascript can be used to store:',
        answers: [
            { text: 'Booleans', correct: false }, 
            { text: 'Numbers and Strings', correct: false },
            { text: 'Other Arrays', correct: false },
            { text: 'All of the above', correct: true },
        ]
    }
]

startButton.addEventListener('click', startQuiz)

function startQuiz() {
nextQuestion()
}



function selectOption () {

}

nextButton.addEventListener('click', nextQuestion)

function nextQuestion() {


}





