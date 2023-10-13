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

function startQuiz() {
    questionsAvailable = [...questions];
    questionCounter = 0;
    score = 0;
    nextQuestion();
}

/* shuffles the question array */
function shuffleQuestions(questionarray) {
    for (let i = questionarray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionarray[i], questionarray[j]] = [questionarray[j], questionarray[i]];
    }
    return questionarray;
}

const shuffledQuestions = shuffleQuestions(questions);

function getQuestion() {

    let currentQuestion = shuffledQuestions[questionCounter];

    let question = document.getElementById('question');
    question.textContent = currentQuestion.question;

    let alternatives = document.querySelectorAll('.choice-container');

    alternatives.forEach((alternative, index) => {
        alternative.textContent = currentQuestion.options[index];
        alternative.dataset.number = index;

        alternative.addEventListener('click', function () {
            if (currentQuestion.answer == index) {
                console.log('Correct!:D');
                alternative.classList.add('correct');
                setTimeout(() => {
                    alternative.classList.remove('correct');
                }, 2000);
                incrementScore();
            } else {
                console.log('Incorrect:(');
                alternative.classList.add('incorrect');
                setTimeout(() => {
                    alternative.classList.remove('incorrect');
                }, 2000);
                decreaseScore();
            }
        });
    });
}

function incrementScore() {
    const displayScore = document.querySelector('#score');
    displayScore.innerHTML = score + 10;
}

function decreaseScore() {
    const displayScore = document.querySelector('#score');
    displayScore.innerHTML = score - 10;
}

function nextQuestion() {
    if (questionCounter >= MAX_QUESTIONS) {
        console.log('end of game');
        return;
    }

    getQuestion(questions[questionCounter]);
    questionCounter++;
}

/* 
function endOfQuiz() {
    console.log("No more questions!")
    location.replace("end.html");
}
 
function maxQuestionsReached() {
 
}
 
*/

startQuiz();
