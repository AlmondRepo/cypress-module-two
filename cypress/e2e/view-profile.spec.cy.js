/// <reference types="cypress" />
import { SignupPage } from "../pageObjects/SignupPage";

const signupPage = new SignupPage();

describe("view profile", () => {
  beforeEach("Visit the web app on every test call", () => {
    cy.visit("https://cypress-course-apps-signup.vercel.app/dashboard");
  });
  it("View user profile on button click", () => {
    cy.get(".profile-btn").should("contain", "View Profile").click();
    cy.url().should("include", "/profile");
    cy.get(".profile-title").should("contain", "User Profile");
    signupPage.getAndShould("#profile-text", "contain", "This is the profile page.");
    cy.get("#back-to-dashboard-profile").should("contain", "Back to Dashboard").click();
    cy.url().should("include", "/dashboard");
    cy.contains();
  });
});
