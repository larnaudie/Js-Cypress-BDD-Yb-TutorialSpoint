import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("new precondition",() => {
    cy.visit("http://demo.guru99.com/test/newtours/");
});

When("action",() => {
    cy.title().should('eq', 'Welcome: Mercury Tours');
});

Then("testeable outcome",() => {
    cy.title().should('eq', 'Welcome: Mercury Tours');
});