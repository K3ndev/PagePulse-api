"use strict";

// dom
const btnDashboard1 = document.querySelector("#btn-dashboard1");
const btnDashboard2 = document.querySelector("#btn-dashboard2");

// temp storage
const accountData = JSON.parse(localStorage.getItem("tempAccountData"));
// session
const sessionAccount = JSON.parse(localStorage.getItem("tempSessionAccount"));

// getData from temp storage
const getData = (email) => {
  return accountData.find((item) => {
    return item.email === email;
  });
};
const currentAccount = () => {
  return getData(sessionAccount.currentEmail);
};

(() => {
  if (sessionAccount !== null) {
    if (currentAccount().privilege === "admin") {
      btnDashboard2.innerText = currentAccount().privilege;
      btnDashboard1.innerText = currentAccount().privilege;
      const regexLocalhost = /localhost/i;
      const currentUrl = window.location.href;
      if (regexLocalhost.test(currentUrl)) {
        console.log("if 1st");
        btnDashboard2.href = "./pages/dashboard.html";
        btnDashboard1.href = "./pages/dashboard.html";
      } else {
        console.log("if 2nd");
        btnDashboard2.href =
          "https://k3ndev.github.io/web-pulse/pages/dashboard.html";
        btnDashboard1.href =
          "https://k3ndev.github.io/web-pulse/pages/dashboard.html";
      }
    }
    if (currentAccount().privilege === "user") {
      btnDashboard2.innerText = `${currentAccount().privilege} ${
        currentAccount().id
      }`;
      btnDashboard1.innerText = `${currentAccount().privilege} ${
        currentAccount().id
      }`;

      const regexLocalhost = /localhost/i;
      const currentUrl = window.location.href;
      if (regexLocalhost.test(currentUrl)) {
        console.log("if 1st");
        btnDashboard2.href = "./pages/dashboard.html";
        btnDashboard1.href = "./pages/dashboard.html";
      } else {
        console.log("if 2nd");
        btnDashboard2.href = "./web-pulse/pages/dashboard.html";
        btnDashboard1.href = "./web-pulse/pages/dashboard.html";
      }
    }
  }
})();

// error log
// btnDashboard1.href = "./web-pulse/pages/dashboard.html"; -> ?
// btnDashboard1.href = "./pages/dashboard.html"; -> ../pages/dashboard.html
// btnDashboard1.href = "/pages/dashboard.html"; -> ../pages/dashboard.html
// btnDashboard1.href = "pages/dashboard.html"; -> ../pages/dashboard.html
// btnDashboard1.href = "/web-pulse/pages/dashboard.html"; -> ../pages/dashboard.html
// ok ok, it will record when we use <record>./dir this... holy cow, thats why web-pulse/ is missing
// LOL, problem fixed, the problem is im logging in as admin not user, wtf
