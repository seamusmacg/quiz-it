// Variables
var userName = document.getElementById('username');
var userPw = document.getElementById('password');
var loginBtn = document.getElementById('login');
var loginForm = document.getElementById("login-form");
var localName;
var localPassword;
var loggedIn = false;

// Check username and store in localStorage if correct
function checkName() {
  if (userName.value.length == 0) {
    alert("Please enter a username!");
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
    alert("Please enter a password!");
    return false;
  } else if (userPw.value.length < 8) {
    alert("Please enter a password with 8 characters or more!");
    return false;
  } else if (userPw.value == 'password') {
    localStorage.setItem('password', userPw.value);
    localPassword = localStorage.getItem('password');
    return true;
  }
}

// Validate inputs, add loader and hide login form elements 
$(document).ready(function () {
  $('#login').click(function () {
    if (checkName() && checkPass()) {
      $(this).prop("disabled", true);
      $(this).html(`<span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>`);


      setTimeout(function () {
        if (localName.length > 0 && localPassword == 'password') {
          loggedIn = true;
          $(loginForm).children().hide();
          $(loginForm).html("" +
            `<i class="fas fa-check-circle"></i>` +
            `<h1>Great, Login Success!</h1>` +
            `<h2>${localName}, Welcome to Quiz-It!</h2>` +
            `<hr>` +
            `<button type="button" class="btn btn-primary btn-block btn-lg" id="start" onsubmit="login()">Start Quiz</button>`);
        } 
      }, 2000);
    } else if (localPassword !== 'password') {
      $(this).prop("disabled", true);
      $(this).html(`<span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>`);

      setTimeout(function () {
          loggedIn = true;
          $(loginForm).children().hide();
          $(loginForm).html("" +
            `<i class="fas fa-exclamation-circle"></i>` +
            `<h1>Sorry, Wrong Password!</h1>` +
            `<h2>${localName}, Please try again!</h2>` + 
            `<hr>` +
            `<button type="button" class="btn btn-primary btn-block btn-lg" id="retry" onsubmit="login()">Try Again</button>`);
      }, 2000);


    }

  });
});

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