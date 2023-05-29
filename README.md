# The Office Quiz (American Version)

This is a quiz based on the American sitcom The Office. It is therefore targeted towards people who have watched the tv show, especially those who are fans, as it allows them to test their knowledge. The site is easy to use and the user gets their score presented to them both during and after the quiz, making it a great opportunity for the competitive to challenge their friends to see who can get the highest result. 

(SCREENSHOT OF AMIRESPONSIVE)

## Planning

At the planning stage of this project, I used pen and paper to sketch ideas. As a JavaScript beginner, I knew I wanted to create a rather simple quiz application before thinking about and perhaps eventually adding more complex features (see Features to Implement further down). The sketch presented below is the wireframe I ended up using. 

![Image of wireframe](/documentation/wireframe-image.png)

## Features

### Existing Features

#### Home Page

![Screenshot of home page](/documentation/home-page-screenshot.png)

* The home page consists of a heading, a short but clear description of the quiz, and a clickable "PLAY" button that will start the game. The background image is colorful and shows characters from the tv show, and the container holding the content has therefore been kept simple to make it easy to read.

#### Quiz Page

![Screenshot of Quiz Page](/documentation/questions-alternatives-screenshot.png)

* **Score Counter**

  * At the top of the question container, the user can keep track of the score. As presented on the home page, a correct answer will give the user 10 points and the score counter will update accordingly (the score counter does not change size even though the presented screenshots make it looks like it does). 

![Screenshot of score counter](/documentation/score-counter-screenshot.png)
![Screenshot of updated score counter](/documentation/score-counter-updated-screenshot.png)

* **Question and Alternatives**

  * Below the score counter, the user will find the question with four clickable answer alternatives. If the user answers correctly, the alternative will turn green. If the user answer is incorrect, the alternative will turn red. After an answer alternative is clicked, the next question will show up automatically. There is a total of ten questions and the order in which they appear is random.

![Screenshot of correct answer](/documentation/correct-answer-screenshot.png)
![Screenshot of incorrect answer](/documentation/incorrect-answer-screenshot.png)

#### End Page

![Screenshot of end page](/documentation/end-page-screenshot.png)

* After the user has answered all ten questions, the end page will show up automatically. The end page will present the final score and gives the user the alternative to click two different buttons, either "Play Again" to restart the game or "Go Home" to go back to the home page. 

### Features to Implement

Below, I present the features that with time could be implemented to improve the quiz further. 

* **Question counter** - A function could be added to display which question the user is currently on (like 5 out of 10).

* **Different levels** - At the home page, the user could be given the option to pick their preferred level (such as beginner, intermediate, advanced). For this, more questions would have to be added as well. 

* **Countdown** - To make the quiz more challenging, a countdown could be added. This could either be done by adding a countdown for each question, or for the entire quiz (such as 10 seconds per question or giving the user a time to complete all ten questions. Perhaps this could be linked to the suggested different levels).

* **Improved result section** - To add a humorous element to the quiz, the user could be given a title (inspired by the characters in the tv show) based on their final score presented at the end page. 

## Testing

### Bugs

click text, fixed by pointer.

* To establish the accessibility of the quiz I ran a devtool lighthouse report that generated the following result:

![Screenshot of lighthouse report](/documentation/lighthouse-report-screenshot.png)

### Validator Testing

* HTML
    * The official W3C validator returned no errors.

![Screenshot of W3C validator result](/documentation/html-validator-test-screenshot.png)

* CSS
   * The official Jigsaw validator returned no errors. 

![Screenshot of jigsaw validator result](/documentation/css-validator-text-screenshot.png)

### Unfixed Bugs

## Deployment

I deployed the application to GitHub pages using the following process:

1. Open up the GitHub repositry for the project.
2. Click the Settings tab and navigate to Pages in the menu to the left of the screen.
3. Under Branch, select "main" in the dropdown menu and click Save.
4. Refresh page to find the link to the live website at the top of the GitHub Pages section.

## Credits

### Content

* [This YouTube Video](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=12s) by YouTube channel "Brian Design" has been a massive help in creating the JavaScript code for this project. I have watched the video several times and used it as a starting point for how to create a quiz using JavaScript, and modified it to fit my project. 

### Media

* The background image displayed on all three pages (home page, game page, and end page) is taken from [Rotten Tomatoe](https://www.rottentomatoes.com/tv/the_office).


