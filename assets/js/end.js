let finalScore = document.getElementById('finalScore');
let scoreMessage = document.getElementById('score-message');
let recentScore = localStorage.getItem('recentScore');

/* line of code from https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2735s, slightly modified */
finalScore.innerHTML = recentScore;

if (recentScore <= 30) {
    scoreMessage.innerHTML = "Hm.. not really a fan of The Office?";
} else if (recentScore <= 70) {
    scoreMessage.innerHTML = "You're pretty good at this!";
} else {
    scoreMessage.innerHTML = "Wow! Michael Scott would be proud!";
};
