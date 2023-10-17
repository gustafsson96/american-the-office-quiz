# The Office Quiz (American Version)

This is a quiz based on the American sitcom The Office. It is therefore targeted towards people who have watched the tv show, especially those who are fans, as it allows them to test their knowledge. The site is easy to use and the user gets their score presented to them both during and after the quiz, making it a great opportunity for the competitive to challenge their friends to see who can get the highest result. 

**Link to the live site: [The Office Quiz](https://gustafsson96.github.io/american-the-office-quiz/)**

![Screenshot of AmIResponsive](/documentation/AmiResponsive.png)
*Screenshot from [Am I Responsive](https://ui.dev/amiresponsive)*

## Planning

At the planning stage of this project, I used pen and paper to sketch ideas. As a JavaScript beginner, I knew I wanted to create a rather simple quiz application before thinking about and perhaps eventually adding more complex features (see Features to Implement further down). The sketch presented below is the wireframe I ended up using. 

![Image of wireframe](/documentation/wireframe-image.png)

### Color Scheme

I used **[coolors](https://coolors.co/)** to determine the color scheme of the project. To match the content with the background image was a prioritization.

![Screenshot of colorscheme](/documentation/colorscheme.png)

## Features

### Existing Features

#### Home Page

![Screenshot of home page](/documentation/home-page-screenshot.png)

* The home page consists of a heading, a short but clear description of the quiz, and a clickable "START QUIZ" button that will start the game. The background image is colorful and shows characters from the tv show, and the container holding the content has therefore been kept simple to make it easy to read.

#### Quiz Page

![Screenshot of Quiz Page](/documentation/quizpage.png)

* The game page displays a question with four clickable alternatives. When the user hovers over an alternative, an orange border is displayed.

**Score Counter:**

![Screenshot of score counter](/documentation/scorecounter.png)

* At the top of the question container, the user can keep track of their score. As presented on the home page, a correct answer will give the user 10 points and the score counter will be updated accordingly.

**Question and Alternatives:**

![Screenshot of correct answer](/documentation/correct.png)

![Screenshot of incorrect answer](/documentation/incorrect.png)

* Below the score counter, the user will find the question with four clickable answer alternatives. If the user answers correctly, the alternative will turn green. If the user answer is incorrect, the alternative will turn red. After an answer alternative is clicked, the next question will show up automatically. There is a total of ten questions and the order in which they appear is random.

**Question Counter:**

![Screenshot of question counter](/documentation/questioncounter.png)

* At the bottom of the questions container, the number of the current question is displayed.

#### End Page

![Screenshot of end page](/documentation/endpage.png)

* After the user has answered all ten questions, the end page will show up automatically. The end page will present the final score together with a sentence depending on what that score is (0-30 = "Hm.. not really a fan of The Office?", 40-70 = "You're pretty good at this!", and 80-100 = "Wow! Michael Scott would be proud!").
* 
* On the end page, the user is also given the alternative to click either "Play Again" to restart the game or "Go Home" to go back to the home page.

### Features to Implement

Below, I present the features that with more time and knowledge could be implemented to improve the quiz further.

* **Different levels** - At the home page, the user could be given the option to pick their preferred level (such as beginner, intermediate, advanced). For this, more questions would have to be added as well. 

* **Countdown** - To make the quiz more challenging, a countdown could be added. This could either be done by adding a countdown for each question, or for the entire quiz (such as 10 seconds per question or giving the user a specific time to complete all ten questions. Perhaps this could be linked to the suggested different levels).

## Testing

### Manual Testing of Pages

**Home Page:**

| TEST  | PASS |
| ------------- | ------------- |
| The purpose of the application is clear  | ✅ |
| The "Start Quiz" button starts the quiz  | ✅  |
| The home page is responsive | ✅  |

**Game Page:**

| TEST  | PASS |
| ------------- | ------------- |
| A question with four alternatives are displayed | ✅ |
| It is clear when a button is being hovered |  ✅  |
| When an alternative is clicked, a color indicates if the answer is correct or incorrect | ✅ |
| When an alternative is clicked and checked, next question is displayed automatically | ✅  |
| The score counter is displayed and updated for correct answers | ✅ |
| The number of the current question (out of 10) is displayed below the question alternatives | ✅  |
| When there are no more questions left, the page relocates to the end page | ✅  |
| The game page is responsive  | ✅ |

**End Page:**

| TEST  | PASS |
| ------------- | ------------- |
| The total score result is displayed |  ✅  |
| A message is displayed based on the score result(three score intervals with different messages)  |  ✅ |
|  The "Play Again" button starts the quiz |  ✅ |
| The "Go Home" button relocates to the home page |  ✅ |
| The end page is responsive  |  ✅  |

**404 Page:**

| TEST  | PASS |
| ------------- | ------------- |
| The 404 page displays when page is not found  |  ✅  |
| The 404 page contains a link back to the start page  |  ✅  |

* Browsers

I opened and played the quiz in the following browsers with no errors to report:
   * Google Chrome
   * Safari
   * Mozilla Firefox

### Lighthouse Report

* To test the performance and accessibility of the quiz I ran devtool lighthouse reports that generated the following result:

![Screenshot of lighthouse report mobile](/documentation/testing/lighthouse-mobile.png)
*Mobile*

![Screenshot of lighthouse report desktop](/documentation/testing/lighthouse-desktop.png)
*Desktop*

I also ran lighthouse reports for the start page and end page that both generated an all green result.

### Validator Testing

* HTML
  * The official **[W3C validator](https://validator.w3.org/)** returned no errors.

![screenshot of index.html validator result](/documentation/testing/indexhtml-validation.png)

![screenshot of game.html validator result](/documentation/testing/gamehtml-validation.png)

![screenshot of end.html validator result](/documentation/testing/endhtml-validation.png)

* CSS
  * The official **[Jigsaw validator]()** returned no errors.

![screenshot of style.css validator result](/documentation/testing/stylecss-validation.png)

![screenshot of game.css validator result](/documentation/testing/gamecss-validation.png)

* JavaScript

* **[JSHint](https://jshint.com/)** returned no errors.

![screenshot of script.js validator result](/documentation/testing/scriptjs-jshint.png)
*script.js*

![screenshot of end.js validator result](/documentation/testing/endjs-jshint.png)
*end.js*

### Fixed Bugs

* When first deployd, the end page would not display in any browser. Fixed by deleting inital slash (/) in url path.

### Unfixed Bugs

There are no known unfixed bugs to present.

## Deployment

I deployed the application to GitHub pages using the following process:

* Open up the GitHub repositry for the project.
* Click the Settings tab and navigate to Pages in the menu to the left of the screen.
* Under Branch, select "main" in the dropdown menu and click Save.
* Refresh page to find the link to the live site at the top of the GitHub Pages section.

**Link to the live quiz: <https://gustafsson96.github.io/american-the-office-quiz/>**

To fork or clone the project, use the following steps:

### Forking

* Log in to GitHub, search for the reopsitory name, and navigate to its main page.
* Locate the "Fork" button and click it.
* Add a description (optional).
* Click the green "Create fork" button.

### Cloning

* Log in to GitHub and search for the repository name and navigate to its main page.
* Click the green "<> Code" button.
* Copy the URL (if using HTTPS, SSH and GitHub CLI are also available options).
* Open the terminal in your IDE and change the location to where you want the cloned repository.
* Type "git clone" followed by the copied URL from the GitHub repo.
* Press enter.

## Credits

### Content

* **[This YouTube Video](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=12s)** by YouTube channel "Brian Design" helped me understand what variables and functionality would be necessary to create the quiz. The JS function to start the quiz is also taken from here.

* I read **[the Fisher–Yates shuffle Wikipedia page](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)** and **[this geeksforgeeks article](https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/)** to learn about the Fisher–Yates shuffle algorithm.

* I watched **[this Youtube Video](https://www.youtube.com/watch?v=RswgVWKJRLM&t=13s)** by YouTube channel "Zenva" to better understand how to create a function to check the user's answer.

* **[This article](https://www.javascripttutorial.net/javascript-dom/javascript-classlist/)** from JavaScript Tutorial helped me understand the classList property better (to implement in the check answer function).

* **[This stack overflow post](https://stackoverflow.com/questions/27674425/how-to-open-another-html-page-using-javascript)** was read to understand how to open a new html page using JavaScript (to display end page at the end of quiz.)

### Media

* The background image displayed on all three pages (home page, game page, and end page) is taken from [Rotten Tomatoes](https://www.rottentomatoes.com/tv/the_office).


