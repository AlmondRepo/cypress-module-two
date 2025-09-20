/// <reference types="cypress" />

import { SignupPage } from "../pageObjects/SignupPage";

const signupPage = new SignupPage();

const passwordClass = ".password";
const emailType = '[type="email"]';

describe("signup", () => {
  beforeEach("Visit the web app on every test call", () => {
    signupPage.visit();
  });
  it("Test signup with valid credentials", () => {
    signupPage.getAndType(emailType, "test@gmail.com");
    signupPage.getAndType(passwordClass, "password@123");
  });
});

it("Test signup with valid credentials", () => {
  cy.signUpWithValidCred();
});
// it("Test signup with valid credentials", () => {
//   cy.signUpWithInvalidCred();
// });

it("Test 2", () => {
  // cy.visit("https://cypress-course-apps-signup.vercel.app/");

  cy.get(emailType).type("weektwolesson@gmail.com");
  cy.get(passwordClass).type("password@123");
  cy.get(".accept-check").find("#check-me").check();

  cy.get(".btn-submit").should("contain", "Signup").click();

  // cy.get("#root").within(() => {
  //   // cy.contains("Signup");
  //   cy.get("div").get("div").get("div").get("input").type("checkbox");
  // });
});

it("Test 3", () => {
  cy.get("#email-id").type("weektwolesson@gmail.com");
  cy.get(passwordClass).type("password@123");
  cy.get("#check-me").check();
  cy.get(".btn-submit").click(); // data-test-id
});

it("Test 4", () => {
  cy.get("#email-id").type("weektwolesson@gmail.com");
  cy.get(passwordClass).type("password@123");
  cy.get("#check-me").check();
  cy.get(".btn-submit").click();
});
