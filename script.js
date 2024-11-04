const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const scoreDisplay = document.getElementById("score");
const nextButton = document.getElementById("next-question");

function loadQuestion() {
    quizContainer.innerHTML = "";
    scoreDisplay.style.display = "none";
    nextButton.style.display = "none";

    const question = questions[currentQuestion];
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerText = question.question;
    quizContainer.appendChild(questionElement);

    const optionsElement = document.createElement("div");
    optionsElement.className = "options";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    quizContainer.appendChild(optionsElement);
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];

    if (selectedOption === question.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        nextButton.style.display = "block";
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.innerHTML = "";
    scoreDisplay.innerText = `You scored ${score} out of ${questions.length}`;
    scoreDisplay.style.display = "block";
}

nextButton.addEventListener("click", () => {
    loadQuestion();
});

loadQuestion();
