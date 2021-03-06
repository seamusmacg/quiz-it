# Manual Testing 

## Functionality 

### Buttons

| Component | Intended Function | Works as Intended? | Fix |
| -------------- | ------------------- | ---------------- | --- |
|**Let's Go Button** | Validates user inputs, return errors or logs user in | Yes | N/A |
|**Start Quiz Button** | Calls API and loads question one of the quiz | Yes | N/A |
|**Next Button** | Validates if input is checked return error if not.| Yes | N/A |
|**Next Button** |Checks if answer is correct and displays if incorrect | No | Some answers not returning as correct due to encoding issue. Created functions to properly encode the answers.
|**Next Button** | Show correct and/or incorrect answer before next question or before end of quiz | No | Last question not showing answers before result section. Added timer function to show answer before results are displayed |
|**Reset Button** | Reset the quiz to settings section | Yes | N/A |
|**Reset Button** | Display message and spinner | Yes | N/A |
|**Play Again Button** | Reset the quiz to settings section | Yes | N/A |
|**Play Again Button** | Display message and spinner | Yes | N/A |
|**Exit Button** | Exit the quiz (to Login section) | Yes | N/A |


### Hover/Focus/Click Effects 

| Component | Intended Function | Works as Intended? | Fix |
| -------------- | ------------------- | ---------------- | --- |
| Username input select | Applies thick blue border around input | Yes | N/A |
| Let's Go, Start Quiz, Next, Play Again Buttons | Changes to lighter blue on hover | Yes | N/A |
| Let's Go, Start Quiz, Next, Play Again Buttons | Changes to lighter blue on click | Yes | N/A |
| Let's Go Button | Shows spinner animation on click | Yes | N/A |
| Exit Button | Changes to a lighter red on hover | Yes | N/A |
| Reset Button | Changes to a lighter red on click | Yes | N/A |


## Usability 

Usability tests were carried out based on user stories as outlined in the README.md file. 

### User Story #1

>As a user , I want confirmation from the application whether I've logged in successfully or unsuccessfully. 

The user is presented with a simple welcome confirmation message when they enter a valid username where it is clear how they should proceed. 

Successful Login: 

!["Successful login message shown to user"](https://github.com/seamusmacg/quiz-it/blob/master/images/success-login.PNG)

Unsuccessful Login (No username entered): 

 !["Unsuccessful login message shown to user for no username"](https://github.com/seamusmacg/quiz-it/blob/master/images/fail-login.PNG)

 Unsuccessful Login (Username too long):

  !["Unsuccessful login message shown to user for using too long a username"](https://github.com/seamusmacg/quiz-it/blob/master/images/fail-login-length.PNG)

### User Story #2

>As a user, I want the application to provide a choice on the category and difficulty level I will be tested on.

The user is presented with two drop down inputs to select the respective category and difficulty.

Category and Difficulty Selection: 

!["Category and Difficulty that user can select"](https://github.com/seamusmacg/quiz-it/blob/master/images/success-login.PNG)

### User Story #3 

> As a user, I want the application to test my knowledge on a variety of topics.

The user is presented with questions from whatever topic they have chosen. 

!["Example question presented to a user"](https://github.com/seamusmacg/quiz-it/blob/master/images/success-login.PNG)

### User Story #4 

> As a user, I want an application that will provide results on the number of questions answered correctly or incorrectly. 

The user is presented with their result based on the number of questions they answered correctly. 

Pass:

!["Pass result shown to the user"](https://github.com/seamusmacg/quiz-it/blob/master/images/pass.PNG)

Fail:

!["Fail result shown to the user"](https://github.com/seamusmacg/quiz-it/blob/master/images/fail.PNG)

## Responsiveness

The application was tested for responsiveness on multiple devices using Chrome Developer Tools. Media queries were used to keep the device responsive across different devices.

| Component | Intended Result | Works as intended? | Fix |
| --------- | --------------- | ------------------ | --- |
| Text | Should be readable and clear for each screen size | Yes | N/A |
| Icons | Maintain ratio at smaller sizes and not be stretched/distorted | Yes | N/A |
| Layout | Sections should be structured properly with proper spacing between features | Yes | N/A |
| Functionality | Buttons should work across screen sizes | Yes | N/A |

## Performance Testing 

I ran the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) testing tool to check the quality and performance of the site. The site received good ratings ranging from 80 - 100. 

!["Lighthouse Report"](https://github.com/seamusmacg/quiz-it/blob/master/images/lighthouse-report.PNG)

## Github Pages 

All the same tests applied in the local environment were also successfully applied on the hosted site (Github pages) without any problems.







