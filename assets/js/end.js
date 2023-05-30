/* REFERENCE: I have used this linked YouTube tutorial: https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=12s 
to create this JavaScript code and modified it for my project */

const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = mostRecentScore;
