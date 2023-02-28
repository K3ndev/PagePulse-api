"use strict";

// dom
const btnDashboard1 = document.querySelector("#btn-dashboard1");
const btnDashboard2 = document.querySelector("#btn-dashboard2");
const logoutBtn1 = document.querySelector("#logoutBtn1");
const logoutBtn2 = document.querySelector("#logoutBtn2");

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
      logoutBtn1.classList.remove("d-none");
      logoutBtn2.classList.remove("d-none");
      btnDashboard2.innerText = currentAccount().privilege;
      btnDashboard1.innerText = currentAccount().privilege;
      const regexLocalhost = /localhost/i;
      const currentUrl = window.location.href;
      if (regexLocalhost.test(currentUrl)) {
        btnDashboard2.href = "./pages/dashboard.html";
        btnDashboard1.href = "./pages/dashboard.html";
      } else {
        btnDashboard2.href = "/web-pulse/pages/dashboard.html";
        btnDashboard1.href = "/web-pulse/pages/dashboard.html";
      }
    }
    if (currentAccount().privilege === "user") {
      logoutBtn1.classList.remove("d-none");
      logoutBtn2.classList.remove("d-none");
      btnDashboard2.innerText = `${currentAccount().privilege} ${
        currentAccount().id
      }`;
      btnDashboard1.innerText = `${currentAccount().privilege} ${
        currentAccount().id
      }`;

      const regexLocalhost = /localhost/i;
      const currentUrl = window.location.href;
      if (regexLocalhost.test(currentUrl)) {
        btnDashboard2.href = "./pages/dashboard.html";
        btnDashboard1.href = "./pages/dashboard.html";
      } else {
        btnDashboard2.href = "/web-pulse/pages/dashboard.html";
        btnDashboard1.href = "/web-pulse/pages/dashboard.html";
      }
    }
  } else {
    btnDashboard2.classList.remove("btn-primary");
    btnDashboard2.classList.remove("text-white");
    btnDashboard2.classList.add("btn-outline-light");
    btnDashboard2.classList.add("text-primary");
    btnDashboard1.classList.remove("btn-primary");
    btnDashboard1.classList.remove("text-white");
    btnDashboard1.classList.add("btn-outline-light");
    btnDashboard1.classList.add("text-primary");
  }
})();

logoutBtn1.addEventListener("click", () => {
  localStorage.removeItem("tempSessionAccount");

  // re-direct
  const regexLocalhost = /localhost/i;
  const currentUrl = window.location.href;
  if (regexLocalhost.test(currentUrl)) {
    window.location.href = "http://localhost:5501/index.html";
  } else {
    window.location.href = "https://k3ndev.github.io/web-pulse/";
  }
});
logoutBtn2.addEventListener("click", () => {
  localStorage.removeItem("tempSessionAccount");

  // re-direct
  const regexLocalhost = /localhost/i;
  const currentUrl = window.location.href;
  if (regexLocalhost.test(currentUrl)) {
    window.location.href = "http://localhost:5501/index.html";
  } else {
    window.location.href = "https://k3ndev.github.io/web-pulse/";
  }
});

console.log("default credentials");
console.log("email: admin@webpulse.com, password: admin");
console.log("email: user@webpulse.com, password: user");
console.log("for hard reset, just delete the local storage");
