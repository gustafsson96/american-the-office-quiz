let finalScore = document.getElementById('finalScore');
let scoreMessage = document.getElementById('score-message');
let recentScore = localStorage.getItem('recentScore');

finalScore.innerHTML = recentScore;

if (recentScore <= 30) {
    scoreMessage.innerHTML = "Hm.. not really a fan of The Office?";
} else if (recentScore <= 70) {
    scoreMessage.innerHTML = "You're pretty good at this!";
} else {
    scoreMessage.innerHTML = "Wow! Michael Scott would be proud!";
};


