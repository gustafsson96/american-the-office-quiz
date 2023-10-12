// Displays text depending on score

if (mostRecentScore <= 30) {
    displayScoreText.innerText = "Hm.. not really a fan of The Office?";
} else if (mostRecentScore <= 70) {
    displayScoreText.innerText = "You're pretty good at this!";
} else {
    displayScoreText.innerText = "Wow! Michael Scott would be proud!";
};
