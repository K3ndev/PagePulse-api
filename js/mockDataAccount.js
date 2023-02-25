"use strict";

const accountData = [
  { id: 0, privilege: "admin", email: "admin@webpulse.com", password: "admin" },
  { id: 1, privilege: "user", email: "user@webpulse.com", password: "user" },
];

const getterAccountData = () => {
  return accountData;
};

export default getterAccountData;
