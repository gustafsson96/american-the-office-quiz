const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is Dwight Schrute\'s middle name?',
        choice1: 'Chris',
        choice2: 'Kurt',
        choice3: 'Cameron',
        choice4: 'David',
        answer: 2,
    },
    {
        question: 'What is the name of Andy\'s acappella group?',
        choice1: 'The Three Amigos',
        choice2: 'Sing the Bells',
        choice3: 'Here Comes Treble',
        choice4: 'Voice of Angels',
        answer: 3,
    },
    {
        question: 'Bob Vance is the owner of...?',
        choice1: 'Vance Refrigeration',
        choice2: 'Vance Automotives',
        choice3: 'Vance Barbershop',
        choice4: 'Vance Insurance',
        answer: 1,
    },
    {
        question: 'Which Dunder Mifflin branch closing is announced at the company picnic?',
        choice1: 'Utica',
        choice2: 'Scranton',
        choice3: 'Nashua',
        choice4: 'Buffalo',
        answer: 4,
    },
    {
        question: 'Kevin claims he is famous for what dish?',
        choice1: 'Tacos',
        choice2: 'Pork Ribs',
        choice3: 'Chicken Alfredo',
        choice4: 'Chili',
        answer: 4,
    },
    {
        question: 'The office performs CPR to what song?',
        choice1: '"Staying Alive"',
        choice2: '"Poker Face"',
        choice3: '"Blurred Lines"',
        choice4: '"Waterloo"',
        answer: 1,
    },
    {
        question: 'What does Michael buy Ryan for Secret Santa?',
        choice1: 'A car',
        choice2: 'A book',
        choice3: 'An iPod',
        choice4: 'A laptop',
        answer: 3,
    },
    {
        question: 'Who wins the refrigerator in "Casino Night"?',
        choice1: 'Creed',
        choice2: 'Meredith',
        choice3: 'Dwight',
        choice4: 'Michael',
        answer: 1,
    },
    {
        question: 'Finish the quote: "Bears, Beets, ...."?',
        choice1: 'Star Trek',
        choice2: 'Dungeons and Dragons',
        choice3: 'Bareastein Bears',
        choice4: 'Battlestar Gallactica',
        answer: 4,
    },
    {
        question: 'Dwight Schrute is the ...?',
        choice1: 'Assistant Regional Manager',
        choice2: 'Assistant to the Regional Manager',
        choice3: 'Regional Assistant Manager',
        choice4: 'Manager of Regional Assistants',
        answer: 2,
    }
];
