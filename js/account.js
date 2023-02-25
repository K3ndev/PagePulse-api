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
});
signInAccountLink?.addEventListener("click", () => {
  createDiv.classList.add("d-none");
  signInDiv.classList.remove("d-none");
  tittlePage.textContent = "webPulse | Sign In Page";
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

// create/sign in listener
//
signInHandler?.addEventListener("click", () => {
  setAccountData();
  //  simple validation
  //   this is weird, return and else cant stop running the code of resetting the inputs
  if (signInEmail.value !== "" && signInPassword.value !== "") {
    console.log("sign in");

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
    // CODE HERE
    // todo, append/re-set an account to localStorage -> 'tempAccountData'
    console.log(
      "append/re-set an account to localStorage -> 'tempAccountData'"
    );

    console.log("create");
    // CODE HERE

    // reset inputs
    createEmail.value = "";
    createPassword.value = "";
  }
});
