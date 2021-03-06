# [Quiz-It Trivia Game](https://seamusmacg.github.io/quiz-it)

!["This application was tested for responsiveness on multiple devices"](https://github.com/seamusmacg/quiz-it/blob/master/images/quiz-it-mockup-final.PNG)

---

## Table of Contents

- [Project Overview](#Project-Overview)
- [UX](#UX)
  * [Strategy](#Strategy)
    * [User Stories](#User-Stories)
  * [Scope/Features](#Scope-and-Features)
  * [Features](#Features)
  * [Structure](#Structure)
  * [Wireframes](#Wireframes)
  * [Colour](#Colour)
  * [Typography](#Typography)
- [Technologies Libraries and Frameworks](#Technologies-Libraries-and-Frameworks)
- [Resources and Tools](#Resources-and-Tools)
- [Testing](#Testing)
  * [Validation](#Validation)
  * [Manual Testing](#Manual-Testing)
- [Deployment](#Deployment)
- [Credits](#Credits)

---


## Project Overview
Quiz-It is a simple quiz trivia game that tests a user's knowledge on a variety of topics. A user can select a Category and a Difficulty, they are then presented with ten questions (one question at a time) that they must answer. After answering each question they are shown whether their answer is correct or incorrect. At the end of the questions they are given their score out of ten. A score of five or above is considered a pass and a score of five or below is considered a fail. 

The questions are generated using an open source trivia API from [Open Trivia Database](https://opentdb.com/api_config.php)

A user must first enter a username in order to play the game. They can reset the game at any time.

Demo available [here](https://seamusmacg.github.io/quiz-it)


## UX

### Strategy

#### User Stories
- As a user , I want confirmation from the application whether I've logged in successfully or unsuccessfully.
- As a user, I want the application to provide a choice on the category and difficulty level I will be tested on.  
- As a user, I want the application to test my knowledge on a variety of topics.
- As a user, I want an application that will provide results on the number of questions answered correctly or incorrectly. 


### Scope and Features 

### Features
- Main login form - contains app logo and name, including a brief description of the game and instructions. Contains a mandatory username input.   
- Settings section - contains confirmation and welcome message, Difficulty and Category selections. A 'Start Quiz' button to set up the quiz form section.   
- Quiz section - contains quiz title, question (numbered) with four possible answers to select as radio buttons. A progress bar to display the number of questions answered. A 'Next' button to display next question, also shows whether the answer is correct or incorrect. A 'Reset' button is also displayed that resets the quiz to the Settings section
- Result section - shows whether the user failed or passed (and displays the score) and buttons to 'Play Again'(same as 'Reset') or 'Quit' (Quit quiz). 

### Structure 
The application is displayed on one page which is dynamically loaded based on user actions. The content of the page is contained in two forms - a login form and quiz form. The structure is focused on providing the information to the user in a presentable format and with intuitive design. 

### Wireframes

I used [Balsamiq](https://balsamiq.com) to create a wireframe for each event presented to the user. 

- [Login Form](https://github.com/seamusmacg/quiz-it/blob/master/images/login-wireframe.png)
- [Login Form Success](https://github.com/seamusmacg/quiz-it/blob/master/images/login-success-wireframe.png)
- [Login Form Failure](https://github.com/seamusmacg/quiz-it/blob/master/images/login-failure-wireframe.png)
- [Quiz Form Question](https://github.com/seamusmacg/quiz-it/blob/master/images/question-wireframe.png)
- [Quiz Form Pass](https://github.com/seamusmacg/quiz-it/blob/master/images/quiz-pass-wireframe.png)
- [Quiz Form Fail](https://github.com/seamusmacg/quiz-it/blob/master/images/quiz-fail-wireframe.png)

The application's layout aims for intuitive design where the user knows how to proceed based what they see. 

The final design of the application differed somewhat to the original wireframes. My mentor advised that a I remove the 'Password' field as it effected usability and that I include a 'Reset' function instead of a 'Logout' function. I removed these functionalities and added these new ones. The overall structure of the application remained the same though.

### Colour

- ![#FF0000](https://via.placeholder.com/15/FF0000/000000?text=+) `#FF0000`
- ![#008000](https://via.placeholder.com/15/008000/000000?text=+) `#008000`
- ![#971d1d](https://via.placeholder.com/15/971d1d/000000?text=+) `#971d1d`
- ![#8fabd6](https://via.placeholder.com/15/8fabd6/000000?text=+) `#8fabd6`
- ![#5681c2](https://via.placeholder.com/15/5681c2/000000?text=+) `#5681c2`
- ![#223a5e](https://via.placeholder.com/15/223a5e/000000?text=+) `#223a5e`
- ![#365c96](https://via.placeholder.com/15/365c96/000000?text=+) `#365c96`
- ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF`

The primary colour theme I used was '2017 Navy Peony' taken from [W3schools](https://www.w3schools.com/w3css/w3css_color_generator.asp). I chose this theme for it's use of
gentle blue/navy colours. As this application requires the user to engage cognitively, I didn't want the colours to be overbearing or distracting. Blue is a calming colour that provides a positive user experience. Validation messages are displayed in the natural colours of green for success and red for errors.

### Typography 

[Inknut Antiqua](https://fonts.google.com/specimen/Inknut+Antiqua) - used for all elements in the application.

I chose this font as its sharpness contrasts with the simple structure and layout of the application giving it a more elegant look and feel.

## Technologies Libraries and Frameworks

- !["HTML5 Badge"](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) - [HTML 5](https://www.w3.org/TR/html52/)  is a markup language that was used displaying content of the application.
- !["CSS Badge"](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) - [CSS](https://www.w3.org/standards/webdesign/htmlcss.html) is a style sheet language used for presenting/styling the content of the application. 
- !["Bootstrap Badge"](https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white) - [Bootstrap](https://getbootstrap.com/) is an open-source framework aimed at responsive, mobile-first front-end web development. This was used throughout the application - providing a basic structure.
- !["Javascript Badge"](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) - [Javascript](https://www.javascript.com/) is a scripting language that was used to provide interactivity to the application.
- !["Jquery"](https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white) - [Jquery](https://jquery.com/) is a Javascript library that was used for HTML DOM tree traversal and manipulation in the application.
- !["Google Fonts"](https://img.shields.io/badge/-Google%20Fonts-red?logo=Google) - [Google Fonts](https://fonts.google.com/) is a library of free licensed font families that was used to import the Inknut Antiqua font.
- !["Font Awesome Badge"](https://img.shields.io/badge/Font_Awesome-5.14-339AF0?logo=font-awesome) - [Font Awesome](https://fontawesome.com/) is a font and icon toolkit that was used to generate the icons used throughout the site. 
- !["Git Badge"](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) - [Git](https://git-scm.com) is an open source distributed version control system that was used to track any changes made to the source code. 
- !["Github Badge"](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) - [Github](https://github.com/) is a platform for hosting software development and version control using Git. This was used to host and deploy the application through Github pages. 

## Resources and Tools

- [VS Code](https://code.visualstudio.com/) - IDE used for writing and testing source code. 
- [W3C Markup Validation Service](https://validator.w3.org/) - Used for validating HTML source code. 
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - Used for validating CSS source code.
- [Jslint](http://jslint.com/) - code quality tool used to check whether source code complies with coding rules
- [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) - Used to test the responsiveness of site on different screen sizes and also used for debugging 
- [Balsamiq](https://balsamiq.com/) - Mockup application tool used to draw wireframes for the application. 
- [ami.responsivdesign.is](http://ami.responsivedesign.is) - Used to make a mockup of the application shown at the beginning of README.md file.
- [Open Trivia Database](https://opentdb.com/) - Provided the [API](https://opentdb.com/api_config.php) used to populate the quiz questions. 
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - used to test the quality and performance of the application. 

## Testing

The application was built using [VS Code](https://code.visualstudio.com). I used the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to conduct testing throughout the development process.

### Validation 

I validated the HTML source code using the [HTML Validation Service](https://validator.w3.org), there were some unused div closing tags causing errors which I removed. 

The CSS passed without any errors - [CSS Validation Service](https://jigsaw.w3.org/css-validator/)

### Manual Testing 

Testing was conducted on the finished application using VS Code Liver Server and Chrome Developer Tools. I also tested the application on different browsers. A full report on the manual testing process that tests functionality, usability, responsiveness and performance is available [here](https://github.com/seamusmacg/quiz-it/blob/master/testing/TESTING.md).

## Deployment

The application was deployed through Github pages as follows:

1. Created a local repository on my local machine which included all the application files and directories. 
2. Initialized the repository through VS Code Source Control 
3. Created a repository on Github with same name. 
4. Staged and committed all the files with appropriate messages.
5. In Settings on Github, I retrieved the [live URL](https://seamusmacg.github.io/quiz-it/).
6. To run the project on your own machine: 
    - **Step 1**: Go to the repository - https://github.com/seamusmacg/quiz-it 
    - **Step 2**: Click "Code" and copy URL 
    - **Step 3**: Open a terminal or CLI on your machine.
    - **Step 4**: Navigate to the directory you wish to locate the repository. 
    - **Step 5**: Type 'git clone' and then paste the URL copied from above. 
    - **Step 6**: Press **Enter** and a clone of the repository will be created. 

## Credits

- [W3schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [Traversy Media - HTML & CSS Course](https://www.udemy.com/course/modern-html-css-from-the-beginning/)
- [Traversy Media - Javascript Course](https://www.udemy.com/course/modern-javascript-from-the-beginning/)
- [Stack Overflow](https://stackoverflow.com/)
- [Open Trivia Database](https://opentdb.com/) 
- I would like to thank my mentor Adegbenga Adeye for all his guidance and help throughout this project. 




