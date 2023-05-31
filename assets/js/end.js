/* REFERENCE: I have used this linked YouTube tutorial: https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=12s 
to create this JavaScript code and modified it for my project */

const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = mostRecentScore;

const displayScoreText = document.querySelector('.finalscore-prefix');


// Displays text depending on score

if (mostRecentScore <= 30) {
    displayScoreText.innerText = "Hm.. not really a fan of The Office?";
} else if (mostRecentScore <= 70) {
    displayScoreText.innerText ="You're pretty good at this!";
} else {
    displayScoreText.innerText ="Wow! Michael Scott would be proud!";
};
