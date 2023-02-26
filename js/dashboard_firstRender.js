"use strict";

// component
const pettyHuman = () => {
  return `<section
        style="padding-bottom: 5rem; padding-top: 5rem"
        class="ut-pt-md-9"
        id="adminDashboard"
      >
        <div class="ut-container px-3">
          <div class="bg-primary ut-shadow-md text-white ut-border-rounded p-5">
            <h1 class="text-center">
              Unauthorized earthling! Sign in to access my entertainment.
            </h1>
          </div>
        </div>
      </section>`;
};
const adminDashboard = (data) => {
  return `<section
        style="padding-bottom: 5rem; padding-top: 5rem"
        class="ut-pt-md-9"
        id="adminDashboard"
      >
        <div class="ut-container px-3">
          <div class="bg-primary ut-shadow-md text-white ut-border-rounded p-5">
            <h1 class="text-center">
              admin
            </h1>
            <div>
            ${data}
            </div>
          </div>
        </div>
      </section>`;
};
const userDashboard = () => {
  return `<section
        style="padding-bottom: 5rem; padding-top: 5rem"
        class="ut-pt-md-9"
        id="adminDashboard"
      >
        <div class="ut-container px-3">
          <div class="bg-primary ut-shadow-md text-white ut-border-rounded p-5">
            <h1 class="text-center">
              user
            </h1>
          </div>
        </div>
      </section>`;
};

//  dom variable
const btnDashboard1 = document.querySelector("#btn-dashboard1");
const btnDashboard2 = document.querySelector("#btn-dashboard2");
const container = document.querySelector("#container");
const tittlePage = document.querySelector("#tittlePage");

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
  if (sessionAccount === null) {
    container.innerHTML = pettyHuman();

    btnDashboard2.href = "../pages/account.html";
    btnDashboard1.href = "../pages/account.html";
    tittlePage.textContent = "Unauthenticans Page";
  } else if (currentAccount().privilege === "admin") {
    container.innerHTML = adminDashboard(JSON.stringify(accountData, 0));
    btnDashboard2.innerText = currentAccount().privilege;
    btnDashboard1.innerText = currentAccount().privilege;
    btnDashboard2.href = "#";
    btnDashboard1.href = "#";
    tittlePage.textContent = "Admin Dashboard Page";
  } else if (currentAccount().privilege === "user") {
    container.innerHTML = userDashboard();
    btnDashboard2.innerText = `${currentAccount().privilege} ${
      currentAccount().id
    }`;
    btnDashboard1.innerText = `${currentAccount().privilege} ${
      currentAccount().id
    }`;
    btnDashboard2.href = "#";
    btnDashboard1.href = "#";
    tittlePage.textContent = "User Dashboard Page";
  }
})();

// PROBLEM
// when you open 2 tab, and login at the same with different credential ... they have their own different session
