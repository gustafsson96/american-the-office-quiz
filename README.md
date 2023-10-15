# The Office Quiz (American Version)

This is a quiz based on the American sitcom The Office. It is therefore targeted towards people who have watched the tv show, especially those who are fans, as it allows them to test their knowledge. The site is easy to use and the user gets their score presented to them both during and after the quiz, making it a great opportunity for the competitive to challenge their friends to see who can get the highest result. 

**Link to the live quiz: **

![Screenshot of AmIResponsive]()
*Screenshot from [Am I Responsive](https://ui.dev/amiresponsive)*

## Planning

At the planning stage of this project, I used pen and paper to sketch ideas. As a JavaScript beginner, I knew I wanted to create a rather simple quiz application before thinking about and perhaps eventually adding more complex features (see Features to Implement further down). The sketch presented below is the wireframe I ended up using. 

![Image of wireframe](/documentation/wireframe-image.png)

### Color Scheme

### Font

## Features

### Existing Features

#### Home Page

![Screenshot of home page](/documentation/home-page-screenshot.png)

* The home page consists of a heading, a short but clear description of the quiz, and a clickable "START QUIZ" button that will start the game. The background image is colorful and shows characters from the tv show, and the container holding the content has therefore been kept simple to make it easy to read.

#### Quiz Page

![Screenshot of Quiz Page]()

* **Score Counter**

  * At the top of the question container, the user can keep track of their score. As presented on the home page, a correct answer will give the user 10 points and the score counter will update accordingly (the score counter does not change size even though the presented screenshots make it looks like it does). 

![Screenshot of score counter]()
![Screenshot of updated score counter]()

* **Question and Alternatives**

  * Below the score counter, the user will find the question with four clickable answer alternatives. If the user answers correctly, the alternative will turn green. If the user answer is incorrect, the alternative will turn red. After an answer alternative is clicked, the next question will show up automatically. There is a total of ten questions and the order in which they appear is random.

![Screenshot of correct answer]()
![Screenshot of incorrect answer]()

#### End Page

![Screenshot of end page]()

* After the user has answered all ten questions, the end page will show up automatically. The end page will present the final score together with a sentence depending on what that score is (0-30 = "Hm.. not really a fan of The Office?", 40-70 = "You're pretty good at this!", and 80-100 = "Wow! Michael Scott would be proud!")
* On the end page, the user is also given the alternative to click either "Play Again" to restart the game or "Go Home" to go back to the home page. 

### Features to Implement

Below, I present the features that with more time and knowledge could be implemented to improve the quiz further.

* **Question counter** - A function could be added to display which question the user is currently on (like 5 out of 10).

* **Different levels** - At the home page, the user could be given the option to pick their preferred level (such as beginner, intermediate, advanced). For this, more questions would have to be added as well. 

* **Countdown** - To make the quiz more challenging, a countdown could be added. This could either be done by adding a countdown for each question, or for the entire quiz (such as 10 seconds per question or giving the user a specific time to complete all ten questions. Perhaps this could be linked to the suggested different levels).

## Testing

* Browsers
   * I opened and played the quiz in Google Chrome. No errors to report. 
   * I opened and played the quiz in Safari. No errors to report. 
   * I opened and played the quiz in Firefox. No errors to report. 

* I have sent the link to the quiz to a few friends for them to open on their devices. I asked if they could play a round and get back to me with feedback with focus on the quiz functionality and if they found it easy to use. They had no errors to report and all found it easy to use. 

* To establish the accessibility of the quiz I ran a devtool lighthouse report that generated the following result:

![Screenshot of lighthouse report]()

### Validator Testing

* HTML
    * The official W3C validator returned no errors.

![Screenshot of W3C validator result]()

* CSS
   * The official Jigsaw validator returned no errors. 

![Screenshot of jigsaw validator result]()

* JSHint

### Unfixed Bugs

* Regarding the question alternatives, not the entire box container can be clicked to generate an answer. I did not manage to solve this in time without breaking the code, but the added pointer shown when hovering over where the alternative is clickable adds an element of clarity. 

## Deployment

I deployed the application to GitHub pages using the following process:

*1. *Open up the GitHub repositry for the project.
2. Click the Settings tab and navigate to Pages in the menu to the left of the screen.
3. Under Branch, select "main" in the dropdown menu and click Save.
4. Refresh page to find the link to the live site at the top of the GitHub Pages section.

**Link to the live quiz: <https://gustafsson96.github.io/american-the-office-quiz/>**

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

* [This YouTube Video](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=12s) by YouTube channel "Brian Design".

### Media

* The background image displayed on all three pages (home page, game page, and end page) is taken from [Rotten Tomatoes](https://www.rottentomatoes.com/tv/the_office).


