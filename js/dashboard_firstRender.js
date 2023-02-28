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
            <h1 class="text-center p-2 bg-white text-black ut-shadow-inner mb-4 fs-bold typo-text-xl" style='border: solid 1px black;'>
              Dashboard
            </h1>
            <table class='w-100' >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Privilege</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                ${data
                  .map((item) => {
                    return `<tr data-id='${item.id}'>
                              <td>${item.id}</td>
                              <td>${item.privilege}</td>
                              <td>${item.email}</td>
                              <td>${item.password}</td>
                              <td>${
                                item.id !== 0
                                  ? `<button class="btn btn-danger" onclick="deleteHandler(this)">delete</button>`
                                  : `<button class="btn btn-danger" disable">disable</button>`
                              }</td>
                            </tr>`;
                  })
                  .join("")}
              </tbody>
            </table>
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
  if (sessionAccount === null) {
    container.innerHTML = pettyHuman();

    btnDashboard2.classList.remove("btn-primary");
    btnDashboard2.classList.remove("text-white");
    btnDashboard2.classList.add("btn-outline-light");
    btnDashboard2.classList.add("text-primary");
    btnDashboard1.classList.remove("btn-primary");
    btnDashboard1.classList.remove("text-white");
    btnDashboard1.classList.add("btn-outline-light");
    btnDashboard1.classList.add("text-primary");

    btnDashboard2.href = "../pages/account.html";
    btnDashboard1.href = "../pages/account.html";
    tittlePage.textContent = "Unauthenticans Page";
  } else if (currentAccount().privilege === "admin") {
    logoutBtn1.classList.remove("d-none");
    logoutBtn2.classList.remove("d-none");
    container.innerHTML = adminDashboard(accountData);
    btnDashboard2.innerText = currentAccount().privilege;
    btnDashboard1.innerText = currentAccount().privilege;
    btnDashboard2.href = "#";
    btnDashboard1.href = "#";
    tittlePage.textContent = "Admin Dashboard Page";
  } else if (currentAccount().privilege === "user") {
    logoutBtn1.classList.remove("d-none");
    logoutBtn2.classList.remove("d-none");
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

logoutBtn1.addEventListener("click", () => {
  localStorage.removeItem("tempSessionAccount");

  // re-direct
  const regexLocalhost = /localhost/i;
  const currentUrl = window.location.href;
  if (regexLocalhost.test(currentUrl)) {
    window.location.href = "http://localhost:5501/pages/account.html";
  } else {
    window.location.href =
      "https://k3ndev.github.io/web-pulse/pages/account.html";
  }
});
logoutBtn2.addEventListener("click", () => {
  localStorage.removeItem("tempSessionAccount");

  // re-direct
  const regexLocalhost = /localhost/i;
  const currentUrl = window.location.href;
  if (regexLocalhost.test(currentUrl)) {
    window.location.href = "http://localhost:5501/pages/account.html";
  } else {
    window.location.href =
      "https://k3ndev.github.io/web-pulse/pages/account.html";
  }
});

function deleteHandler(t) {
  const tempId = t.parentNode.parentNode.dataset.id;
  const tempData = accountData;

  const filterChosen = (data, tempId) => {
    return data.filter((item) => {
      return item.id !== +tempId;
    });
  };

  localStorage.setItem(
    "tempAccountData",
    JSON.stringify(filterChosen(tempData, tempId))
  );
  container.innerHTML = adminDashboard(tempData);

  // render again, its hard refresh lmao haha, i don't want to create an observable or vdom
  // === comparing, doesn't work i dunno why, even thou i use split and join
  const regexLocalhost = /localhost/i;
  const currentUrl = window.location.href;
  if (regexLocalhost.test(currentUrl)) {
    window.location.href = "http://localhost:5501/pages/dashboard.html";
  } else {
    window.location.href =
      "https://k3ndev.github.io/web-pulse/pages/dashboard.html";
  }
}
