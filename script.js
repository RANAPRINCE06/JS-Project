const quizData = [
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: "Mars" },
    { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Bangalore"], correct: "Delhi" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Nikola Tesla", "Isaac Newton", "Thomas Edison"], correct: "Alexander Graham Bell" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], correct: "H2O" },
    { question: "Which country is famous for the Eiffel Tower?", options: ["Italy", "France", "USA", "Germany"], correct: "France" },
    { question: "What is the square root of 64?", options: ["6", "8", "10", "12"], correct: "8" },
    { question: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"], correct: "William Shakespeare" },
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: "Carbon Dioxide" },
    { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], correct: "Tokyo" },
    { question: "Which is the smallest planet in the Solar System?", options: ["Mars", "Venus", "Mercury", "Neptune"], correct: "Mercury" }
];

let currentQuestionIndex = 0;
let attempted = 0;
let score = 0;
document.getElementById("total").innerText = quizData.length;

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    document.querySelector(".question").innerText = questionData.question;
    
    const optionLabels = ["A.", "B.", "C.", "D."];
    document.querySelector(".options").innerHTML = questionData.options.map((opt, index) => 
        `<button onclick="selectAnswer(this, '${opt}')">${optionLabels[index]} ${opt}</button>`
    ).join("");

    document.querySelector(".prev-btn").style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
    document.querySelector(".next-btn").style.display = currentQuestionIndex === quizData.length - 1 ? "none" : "inline-block";
    document.querySelector(".submit-btn").style.display = currentQuestionIndex === quizData.length - 1 ? "inline-block" : "none";
}

function selectAnswer(button, selectedOption) {
    document.querySelectorAll(".options button").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    attempted++;
    document.getElementById("attempted").innerText = attempted;

    if (selectedOption === quizData[currentQuestionIndex].correct) {
        score++;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function submitQuiz() {
    let percentage = (score / quizData.length) * 100;
    alert(`Congratulations! 🎉\nYou scored ${score} out of ${quizData.length}.\nPercentage: ${percentage.toFixed(2)}%`);
}

loadQuestion();
