export class SignupPage {
  visit() {
    cy.visit("https://cypress-course-apps-signup.vercel.app/");
  }

  getAndType(get, type) {
    cy.get(get).type(type);
  }

  getAndSelect(get, select) {
    cy.get(get).select(select);
  }

  getAndCheck(get) {
    cy.get(get).find("#check-me").check();
  }

  getAndClick(get) {
    cy.get(get).should("contain", "Signup").click();
  }
  getAndShould(get, identifier, value) {
    cy.get(get).should(identifier, value);
  }
}
