/// <reference types="cypress" />

//TEST SUIT 1:-
it('should submit the form after filling the fields with valid credentials and checking the success message', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!{enter}")
    cy.get('#flash').should('contain','You logged into a secure area!')
})

it('to logout successfully', () => {
    cy.get('.button').click()
   cy.get('#flash').should('contain','You logged out of the secure area!')
})

it('to login with invalid username and password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("ttt")
    cy.get('#password').type("WrongPassword{enter}")
    cy.get('#flash').should('contain','Your username is invalid!')
})