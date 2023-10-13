
const displayScore = document.querySelector('#score');

const questions = [
    {
        question: 'What is Dwight Schrute\'s middle name?',
        options: ['Chris', 'Kurt', 'Cameron', 'David'],
        answer: 'Kurt'
    },
    {
        question: 'What is the name of Andy\'s acappella group?',
        options: ['The Three Amigos', 'Sing the Bells', 'Here Comes Treble', 'Voice of Angels'],
        answer: 'Here Comes Treble'
    },
    {
        question: 'Bob Vance is the owner of...?',
        options: ['Vance Refrigeration', 'Vance Automotives', 'Vanc e Barbershop', 'Vance Insurance'],
        answer: 'Vance Refrigeration'
    },
    {
        question: 'Which Dunder Mifflin branch closing is announced at the company picnic?',
        options: ['Utica', 'Scranton', 'Nashua', 'Buffalo'],
        answer: 'Buffalo'
    },
    {
        question: 'Kevin claims he is famous for what dish?',
        options: ['Tacos', 'Pork Ribs', 'Chicken Alfredo', 'Chili'],
        answer: 'Chili'
    },
    {
        question: 'The office performs CPR to what song?',
        options: ['"Staying Alive"', '"Poker Face"', '"Blurred Lines"', '"Waterloo"'],
        answer: '"Staying Alive"'
    },
    {
        question: 'What does Michael buy Ryan for Secret Santa?',
        options: ['A car', 'A book', 'An iPod', 'A laptop'],
        answer: 'An iPod'
    },
    {
        question: 'Who wins the refrigerator in "Casino Night"?',
        options: ['Creed', 'Meredith', 'Dwight', 'Michael'],
        answer: 'Creed'
    },
    {
        question: 'Finish the quote: "Bears, Beets, ...."?',
        options: ['Star Trek', 'Dungeons and Dragons', 'Bareastein Bears', 'Battlestar Gallactica'],
        answer: 'Battlestar Gallactica'
    },
    {
        question: 'Dwight Schrute is the ...?',
        options: ['Assistant Regional Manager', 'Assistant to the Regional Manager', 'Regional Assistant Manager', 'Manager of Regional Assistants'],
        answer: 'Assistant to the Regional Manager'
    }
];


/* let questions = [
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

*/

const POINTS = 10;
const MAX_QUESTIONS = 10;

let questionsAvailable = [...questions];
let score = 0;
let questionCounter = 0;
let acceptingAnswers = true;

function startQuiz() {
    questionsAvailable = [...questions];
    questionCounter = 0;
    score = 0;
    getQuestion();
}

function shuffleQuestions(questionarray) {
    for (let i = questionarray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionarray[i], questionarray[j]] = [questionarray[j], questionarray[i]];
    }
    return questionarray;
}

const shuffledQuestions = shuffleQuestions(questions);

function getQuestion() {
    if (questionCounter >= MAX_QUESTIONS) {
        endOfQuiz();
        return;
    }

    const currentQuestion = shuffledQuestions[questionCounter];

    const question = document.getElementById('question');
    question.textContent = currentQuestion.question;

    const alternatives = document.querySelectorAll('.choice-container');
    alternatives.forEach((alternative, index) => {
        alternative.textContent = currentQuestion.options[index];
        alternative.dataset.number = index;
    });

    questionCounter++;
}

/* function maxQuestionsReached() {

}

function checkAnswer() {

}

function incrementScore() {

}

function endOfQuiz() {

} */

startQuiz();
