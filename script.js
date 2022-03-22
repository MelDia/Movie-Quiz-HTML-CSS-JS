const quizData = [
    {
        question: "Who directed the original trilogy of the Star Wars saga?",
        a: "George Lucas",
        b: "Curious George",
        c: "George George",
        d: "George Clooney",
        correct: "a",
    },
    {
        question: "Which actor played the wizard Gandalf in The Lord of the Rings trilogy?",
        a: "Ian Magneto",
        b: "Ian Gallagher",
        c: "Ian Mckellen",
        d: "Patrick Stewart",
        correct: "c",
    },
    {
        question: "Which actor played Miranda Presley?",
        a: "Michelle Pfeiffer",
        b: "Catherine Zeta-Jones ",
        c: "Donna Sheridan",
        d: "Meryl Streep",
        correct: "d",
    },
    {
        question: "For which movie did Leonardo DiCaprio win his first Oscar?",
        a: "Shutter Island",
        b: "The Revenant",
        c: "Once Upon a Time in Hollywood",
        d: "The Great Gatsby",
        correct: "b",
    },
    {
        question: "Who directed the movie Edward Scissorhands?",
        a: "Tim Burton",
        b: "Tim Buton",
        c: "Benjamin Buton",
        d: "Timothy B",
        correct: "a",
    },
    {
        question: "Who wrote the screenplay for the movie Good Will Hunting and also starred in it?",
        a: "Casey Affleck",
        b: "Robin Williams",
        c: "Ben Affleck",
        d: "Matt Damon",
        correct: "d",
    },
    {
        question: "What 1999 movie tells the story of a boy who can see dead people?",
        a: "Fifth Sense",
        b: "The Sixth Sense",
        c: "Sixth Sense",
        d: "The Fifth Sense",
        correct: "b",
    },
    {
        question: "Which film directed by Peter Weir starred Robin Williams in 1989?",
        a: "Dead Pets Society ",
        b: "Dead Poets Club",
        c: "Dead Poets Society ",
        d: "Live Poets Society",
        correct: "c",
    },
    {
        question: "What studio produced Spirited Away in 2001?",
        a: "Studio Ghibli",
        b: "Studio Ponoc",
        c: "Studio Chizu",
        d: "Studio Pixar",
        correct: "a",
    },
    {
        question: "In which movie can we find a writer named Jack Torrance?",
        a: "The raining",
        b: "The lightning",
        c: "The Shining",
        d: "The thundering",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
            <p style="padding: 1rem; text-align:center;margin: 0; padding: 4rem;font-size: 1.2rem; width: 600 px;height: 200px;">
                You answered ${score}/${quizData.length} questions correctly </p>
                <button onclick="history.go(0)">Play Again</button>
       ` // location.reload() won't work in CodePen for security reasons;  
        }
    }
});  