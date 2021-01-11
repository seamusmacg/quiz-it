// Variables
var userName = document.getElementById('username');
var userPw = document.getElementById('password');
var loginBtn = document.getElementById('login');
var loginForm = document.getElementById("login-form");
var quizContent = document.getElementsByClassName("form-check");
var localName;
var localPassword;
var loggedIn = false;
var data;
var question;


// Run API request on window load
window.onload = sendApiRequest();


//Get questions from the API
async function sendApiRequest() {
  const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
  const response = await fetch(url);
  console.log(response);
  data = await response.json();
  console.log(data);

  if (!response.ok) {
    document.getElementById('errors').innerHTML = `Sorry a ${response.status} error has occured. Try again later.`;
  } else {
    fillForm();
  }
}

//Fill form with question and answers
function fillForm() {
  // document.getElementById('question').innerHTML = `${data.results[0].question}`;
  document.getElementById('question').innerHTML = '';
  for (i = 0; i < data.results.length; i++) {
    window['question' + i] = document.getElementById('question').innerHTML = `${data.results[i].question}`;
  }
  console.log(question1, question2);
}

// Check username and store in localStorage if correct
function checkName() {
  if (userName.value.length == 0) {
    document.getElementById('errors').innerHTML = "Please enter a username!";
    return false;
  } else if (userName.value.length > 0) {
    localStorage.setItem('name', userName.value);
    localName = localStorage.getItem('name');
    return true;
  }
}

// Check password and store in localStorage if correct
function checkPass() {
  if (userPw.value.length == 0) {
    document.getElementById('errors').innerHTML = "Please enter a password!";
    return false;
  } else if (userPw.value.length < 8) {
    document.getElementById('errors').innerHTML = "Please enter a password with 8 characters or more!";
    return false;
  } else if (userPw.value == 'password' || userPw.value.length >= 8) {
    localStorage.setItem('password', userPw.value);
    localPassword = localStorage.getItem('password');
    return true;
  }
}

// Validate inputs, add loader and hide login form elements 
$(document).ready(function () {
  $('#login').click(function () {
    if (checkName() && checkPass() && localName.length > 0 && localPassword == 'password') {
      $(this).prop("disabled", true);
      $(this).html(`<span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>`);


      setTimeout(function () {
        loggedIn = true;
        $(loginForm).children().hide();
        $('.main-container').append(`<button type="button" class="btn btn-danger logout-btn" onclick="reloadPage()">Logout</button>`);
        $(loginForm).html("" +
          `<i class="fas fa-check-circle"></i>` +
          `<h1>Login Success!</h1>` +
          `<h2>Welcome ${localName}!</h2>` +
          `<hr>` +
          `<button type="button" class="btn btn-primary btn-block btn-lg" id="start" onsubmit="login()">Start Quiz</button>`);
      }, 2000);
    } else if (checkName() && checkPass() && localName.length > 0 && localPassword !== 'password') {
      $(this).prop("disabled", true);
      $(this).html(`<span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>`);
      loggedIn = false;

      setTimeout(function () {
        $(loginForm).children().hide();
        $(loginForm).html("" +
          `<i class="fas fa-exclamation-circle"></i>` +
          `<h1>Wrong Password!</h1>` +
          `<h2>Please try again!</h2>` +
          `<hr>` +
          `<button type="button" class="btn btn-primary btn-block btn-lg" id="retry" onclick="reloadPage()">Try Again</button>`);
      }, 2000);


    }

  });
});

function reloadPage() {
  window.location.reload();
  return false;
}

// Change border of form name input when clicked
$(document).ready(function () {
  $(function () {
    $('.input-with-icon-name').on('click', function () {
      $('.icon-wrap-name').toggleClass('iconWrapBorderColor');
    });
  });
});

// Change border of form pass input when clicked
$(document).ready(function () {
  $(function () {
    $('.input-with-icon-pass').on('click', function () {
      $('.icon-wrap-pass').toggleClass('iconWrapBorderColor');
    });
  });
});
