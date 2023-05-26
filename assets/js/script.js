const question = document.querySelector('#question');
const alternatives = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is Dwight Schrute\'s middle name?',
        alternative1: 'Chris',
        alternative2: 'Kurt',
        alternative3: 'Cameron',
        alternative4: 'David',
        answer: 2,
    },
    {
        question: 'What is the name of Andy\'s acappella group?',
        alternative1: 'The Three Amigos',
        alternative2: 'Sing the Bells',
        alternative3: 'Here Comes Treble',
        alternative4: 'Voice of Angels',
        answer: 3,
    },
    {
        question: 'Bob Vance is the owner of...?',
        alternative1: 'Vance Refrigeration',
        alternative2: 'Vance Automotives',
        alternative3: 'Vance Barbershop',
        alternative4: 'Vance Insurance',
        answer: 1,
    },
    {
        question: 'Which Dunder Mifflin branch closing is announced at the company picnic?',
        alternative1: 'Utica',
        alternative2: 'Scranton',
        alternative3: 'Nashua',
        alternative4: 'Buffalo',
        answer: 4,
    },
    {
        question: 'Kevin claims he is famous for what dish?',
        alternative1: 'Tacos',
        alternative2: 'Pork Ribs',
        alternative3: 'Chicken Alfredo',
        alternative4: 'Chili',
        answer: 4,
    },
    {
        question: 'The office performs CPR to what song?',
        alternative1: '"Staying Alive"',
        alternative2: '"Poker Face"',
        alternative3: '"Blurred Lines"',
        alternative4: '"Waterloo"',
        answer: 1,
    },
    {
        question: 'What does Michael buy Ryan for Secret Santa?',
        alternative1: 'A car',
        alternative2: 'A book',
        alternative3: 'An iPod',
        alternative4: 'A laptop',
        answer: 3,
    },
    {
        question: 'Who wins the refrigerator in "Casino Night"?',
        alternative1: 'Creed',
        alternative2: 'Meredith',
        alternative3: 'Dwight',
        alternative4: 'Michael',
        answer: 1,
    },
    {
        question: 'Finish the quote: "Bears, Beets, ...."?',
        alternative1: 'Star Trek',
        alternative2: 'Dungeons and Dragons',
        alternative3: 'Bareastein Bears',
        alternative4: 'Battlestar Gallactica',
        answer: 4,
    },
    {
        question: 'Dwight Schrute is the ...?',
        alternative1: 'Assistant Regional Manager',
        alternative2: 'Assistant to the Regional Manager',
        alternative3: 'Regional Assistant Manager',
        alternative4: 'Manager of Regional Assistants',
        answer: 2,
    }
];

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 10;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    newQuestion();
}

function newQuestion() {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    alternatives.forEach(alternative => {
        const number = alternative.dataset['number'];
        alternative.innerText = currentQuestion['alternative' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

alternatives.forEach(alternative => {
    alternative.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedAlternative = e.target;
        const selectedAnswer = selectedAlternative.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedAlternative.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedAlternative.parentElement.classList.remove(classToApply);
            newQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();
