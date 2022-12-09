// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let usernameInput = document.getElementById('username-input');
let passwordInput = document.getElementById("password-input");
let confirmInput = document.getElementById("Confirm-Input");
let signInUsername = document.getElementById("Sign-In-Username");
let signInPassword = document.getElementById("Sign-In-Password");
// array
  let users = getMember();


// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let username = usernameInput.value;
  let password = passwordInput.value;
  let confirm = confirmInput.value;

  if (inUse() === true) {
    alert("Username Already Exists")
    return;
  } else {
    if (password === confirm) {
      users.push(newMember(username, password));
      saveMember();
      alert("Sign Up Complete. Welcome ")
    } else {
      alert("Password Does Not Match...")
    }
  }
}




// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  if (match() === true) {
    alert("Welcome Back");
  } else {
    alert("Password Or Username Is Incorrect");
  }
}





// Helper Functions
// Save In Local Storage
function saveMember() {
  localStorage.setItem('member-info', JSON.stringify(users))
}


// Get Item From Local Storage 
function getMember() {
  let jsonMember = localStorage.getItem('member-info');
  return JSON.parse(jsonMember) ?? [];
}


// Creat New Member
function newMember(usernameInfo, pwdInfo) {
  return {
    UsernameDescription: usernameInfo,
    pwd: pwdInfo
  };
}

// check to see if userame already Exist  
function inUse() {
  for (let i = 0; i < users.length; i++) {
    if (usernameInput.value === users[i].UsernameDescription) {
        return true;
    }
  }
}


// check to see if password and username macth 
function match() {
  for (let i = 0; i < users.length; i++) {
    if (signInUsername.value === users[i].UsernameDescription && signInPassword.value === users[i].pwd) {
      return true;
    }
  }
}