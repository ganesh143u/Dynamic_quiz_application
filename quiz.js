const quizData = [
    {
        question: "What is the capital of France?",
        options: ["New York", "London", "Paris", "Dublin"],
        answer: "Paris"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
        answer: "Leonardo Da Vinci"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Venus", "Saturn", "Jupiter"],
        answer: "Jupiter"
    },
    {
        question: "Which gas do plants absorb from the atmosphere and release oxygen during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Who is the author of the Harry Potter book series?",
        options: ["J.R.R. Tolkien", "George Orwell", "J.K. Rowling", "Agatha Christie"],
        answer: "J.K. Rowling"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["South Korea", "China", "Japan", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the chemical symbol for the element gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Earth", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.querySelector('.question-text');
const optionsContainer = document.querySelector('.options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.querySelector('.result-container');
const scoreDisplay = document.getElementById('score');
const resultMessage = document.querySelector('.result-message');
const questionNumberDisplay = document.getElementById('question-number');
const totalQuestionsDisplay = document.getElementById('total-questions');

function loadQuestion(question) {
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionLabel = document.createElement('label');
        optionLabel.innerHTML = `
            <input type="radio" name="answer" value="${option}">
            ${option}
        `;
        optionLabel.querySelector('input').addEventListener('change', () => {
            nextButton.disabled = false;
        });
        optionsContainer.appendChild(optionLabel);
    });

    questionNumberDisplay.textContent = currentQuestionIndex + 1;
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        score++;
    }
}

function showResult() {
    questionText.style.display = 'none';
    optionsContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreDisplay.textContent = score;
    resultMessage.textContent = `You got ${score} out of ${quizData.length} questions correct!`;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        checkAnswer(selectedAnswer.value);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion(quizData[currentQuestionIndex]);
        nextButton.disabled = true;
    } else {
        showResult();
    }
}

totalQuestionsDisplay.textContent = quizData.length;
loadQuestion(quizData[currentQuestionIndex]);

nextButton.addEventListener('click', nextQuestion);
