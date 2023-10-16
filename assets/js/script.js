const questions = [
    {
        question: 'What is Dwight Schrute\'s middle name?',
        options: ['Chris', 'Kurt', 'Cameron', 'David'],
        answer: 1
    },
    {
        question: 'What is the name of Andy\'s acappella group?',
        options: ['The Three Amigos', 'Sing the Bells', 'Here Comes Treble', 'Voice of Angels'],
        answer: 2
    },
    {
        question: 'Bob Vance is the owner of...?',
        options: ['Vance Refrigeration', 'Vance Automotives', 'Vance Barbershop', 'Vance Insurance'],
        answer: 0
    },
    {
        question: 'Which Dunder Mifflin branch closing is announced at the company picnic?',
        options: ['Utica', 'Scranton', 'Nashua', 'Buffalo'],
        answer: 3
    },
    {
        question: 'Kevin claims he is famous for what dish?',
        options: ['Tacos', 'Pork Ribs', 'Chicken Alfredo', 'Chili'],
        answer: 3
    },
    {
        question: 'The office performs CPR to what song?',
        options: ['"Staying Alive"', '"Poker Face"', '"Blurred Lines"', '"Waterloo"'],
        answer: 0
    },
    {
        question: 'What does Michael buy Ryan for Secret Santa?',
        options: ['A car', 'A book', 'An iPod', 'A laptop'],
        answer: 2
    },
    {
        question: 'Who wins the refrigerator in "Casino Night"?',
        options: ['Creed', 'Meredith', 'Dwight', 'Michael'],
        answer: 0
    },
    {
        question: 'Finish the quote: "Bears, Beets, ...."?',
        options: ['Star Trek', 'Dungeons and Dragons', 'Bareastein Bears', 'Battlestar Gallactica'],
        answer: 3
    },
    {
        question: 'Dwight Schrute is the ...?',
        options: ['Assistant Regional Manager', 'Assistant to the Regional Manager', 'Regional Assistant Manager', 'Manager of Regional Assistants'],
        answer: 1
    }
];

const MAX_QUESTIONS = 10;

let questionsAvailable = [...questions];
let score = 0;
let questionCounter = 0;
let acceptingAnswers = true;

/* start the quiz */
/* startQuiz code content from: https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2735s */
function startQuiz() {
    questionsAvailable = [...questions];
    questionCounter = 0;
    score = 0;
    getQuestion();
}

/* shuffles the question array using the fisher-yates algorithm */
function shuffleQuestions(questionarray) {
    for (let i = questionarray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionarray[i], questionarray[j]] = [questionarray[j], questionarray[i]];
    }
    return questionarray;
}

let shuffledQuestions = shuffleQuestions(questions);
let currentQuestion = shuffledQuestions[questionCounter];
let question = document.getElementById('question');
let alternatives = document.querySelectorAll('.choice-container');

/* display a new question or end quiz if there are none */
function getQuestion() {
    if (questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('recentScore', score);
        endOfQuiz();
    } else {
        currentQuestion = shuffledQuestions[questionCounter];
        question.textContent = currentQuestion.question;

        alternatives.forEach((alternative, index) => {
            alternative.textContent = currentQuestion.options[index];
            alternative.dataset.number = index;
        });

        acceptingAnswers = true;

        questionCounter++;
        incrementQuestionCounter();
    }
}

/* displays number of current question */
function incrementQuestionCounter() {
    const questionNumber = document.getElementById('questioncounter');
    questionNumber.innerHTML = questionCounter;
}

alternatives.forEach((alternative, index) => {
    alternative.addEventListener('click', () => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        handleAnswerClick(index);
    });
});

/* check answer status and implement class accordingly */
function handleAnswerClick(index) {
    const alternative = alternatives[index];

    if (currentQuestion.answer == index) {
        alternative.classList.add('correct');
        incrementScore();
    } else {
        alternative.classList.add('incorrect');
    }

    setTimeout(() => {
        alternative.classList.remove('correct', 'incorrect');
        getQuestion();
    }, 1000);
}

/* increment score by 10 for correct answer */
function incrementScore() {
    score += 10;
    const displayScore = document.querySelector('#score');
    displayScore.innerHTML = score;
}


/* relocate to end.html when quiz is over */
function endOfQuiz() {
    return window.location.replace("/end.html");
}

startQuiz();