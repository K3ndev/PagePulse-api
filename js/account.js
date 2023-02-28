"use strict";

// imports
import getterAccountData from "./mockDataAccount.js";

// element
const signInDiv = document.querySelector("#signInDiv");
const createDiv = document.querySelector("#createDiv");
const tittlePage = document.querySelector("#tittlePage");

// goto
const createAccountLink = document.querySelector("#createAccountLink");
const signInAccountLink = document.querySelector("#signInAccountLink");

// user input
const signInEmail = document.querySelector("#signInEmail");
const signInPassword = document.querySelector("#signInPassword");
const createEmail = document.querySelector("#createEmail");
const createPassword = document.querySelector("#createPassword");

// sign in, sign up toggle
const signInHandler = document.querySelector("#signInHandler");
const createHandler = document.querySelector("#createHandler");

// dynamic mimic components listener
createAccountLink?.addEventListener("click", () => {
  signInDiv.classList.add("d-none");
  createDiv.classList.remove("d-none");
  tittlePage.textContent = "webPulse | Sign Up Page";

  // reset inputs
  signInEmail.value = "";
  signInPassword.value = "";
});
signInAccountLink?.addEventListener("click", () => {
  createDiv.classList.add("d-none");
  signInDiv.classList.remove("d-none");
  tittlePage.textContent = "webPulse | Sign In Page";

  // reset inputs
  createEmail.value = "";
  createPassword.value = "";
});

// will set a data to localStorage
const setAccountData = () => {
  const statusDevice = localStorage.getItem("tempAccountData");
  const accountData = getterAccountData();

  // will only run once to new device
  if (statusDevice === null) {
    localStorage.setItem("tempAccountData", JSON.stringify(accountData));
  }
};

// check if the email and password is exist in temp localStorage
const checkEmail = (email, password) => {
  const tempAccountData = JSON.parse(localStorage.getItem("tempAccountData"));
  return tempAccountData.some((item) => {
    return item.email === email && item.password === password;
  });
};

// validation email
const validateEmail = (email) => {
  const regexEmail = /@/i;
  const regexDot = /\./i;
  return regexEmail.test(email) && regexDot.test(email);
};

// get the number from last index
const getNumber = (data) => {
  const lastIndex = data.length - 1;
  return data[lastIndex].id + 1;
};

// create/sign in listener
//
signInHandler?.addEventListener("click", () => {
  setAccountData();
  //  simple validation
  //   this is weird, return and else cant stop running the whole signInHandler code
  if (signInEmail.value !== "" && signInPassword.value !== "") {
    // validation the email and password is exist
    if (checkEmail(signInEmail.value, signInPassword.value)) {
      // reset
      signInEmail.classList.remove("ut-input-warning");
      signInPassword.classList.remove("ut-input-warning");

      // re-direct
      const regexLocalhost = /localhost/i;
      const currentUrl = window.location.href;

      // fake session
      const tempSession = { currentEmail: signInEmail.value };
      localStorage.setItem("tempSessionAccount", JSON.stringify(tempSession));

      // === comparing, doesn't work i dunno why, even thou i use split and join
      if (regexLocalhost.test(currentUrl)) {
        window.location.href = "http://localhost:5501/pages/dashboard.html";
      } else {
        window.location.href =
          "https://k3ndev.github.io/web-pulse/pages/dashboard.html";
      }

      signInEmail.classList.remove("ut-input-warning");
      signInPassword.classList.remove("ut-input-warning");
    } else {
      signInEmail.classList.add("ut-input-warning");
      signInPassword.classList.add("ut-input-warning");
    }

    // reset inputs
    signInEmail.value = "";
    signInPassword.value = "";
  }
});

//
createHandler?.addEventListener("click", () => {
  setAccountData();
  //  simple validation
  if (createEmail.value !== "" && createPassword.value !== "") {
    if (validateEmail(createEmail.value)) {
      // retrieve existing data from localStorage
      const tempAccountData =
        JSON.parse(localStorage.getItem("tempAccountData")) || [];

      // create a new account object
      const newAccount = {
        id: getNumber(tempAccountData),
        privilege: "user",
        email: createEmail.value,
        password: createPassword.value,
      };

      // add the new account to the existing data
      tempAccountData.push(newAccount);

      // save the updated data back to localStorage
      localStorage.setItem("tempAccountData", JSON.stringify(tempAccountData));

      createEmail.classList.remove("ut-input-warning");
      createPassword.classList.remove("ut-input-warning");

      const regexLocalhost = /localhost/i;
      const currentUrl = window.location.href;
      if (regexLocalhost.test(currentUrl)) {
        window.location.href = "http://localhost:5501/pages/account.html";
      } else {
        window.location.href =
          "https://k3ndev.github.io/web-pulse/pages/account.html";
      }
    } else {
      createEmail.classList.add("ut-input-warning");
      createPassword.classList.add("ut-input-warning");
    }

    // reset inputs
    createEmail.value = "";
    createPassword.value = "";
  }
});

// todo
// when toggling create and login, the input is saved, make this not
