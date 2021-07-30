/// <reference types="cypress" />

import { describe } from "mocha"

//TEST SUIT 1:-
describe('TEST SUIT 1', () =>{
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
})
//TEST SUIT 2:-
describe('TEST SUIT 2', () =>{
it('should search for an entry in the table', () => {
    cy.visit('https://www.seleniumeasy.com/test/table-search-filter-demo.html')
    cy.get('#task-table-filter').type("seo tags")
    cy.get('#task-table-filter').should('contain','seo tags')
    //cy.get('#flash').should('contain','You logged into a secure area!')
})
it('should check that filters are disabled before clicking on filter icon, then filter by username', () => {
    cy.get(':nth-child(1) > .form-control').should('be.disabled')

    cy.get('.filters > :nth-child(2) > .form-control').should('be.disabled')

    cy.get(':nth-child(3) > .form-control').should('be.disabled')

    cy.get(':nth-child(4) > .form-control').should('be.disabled')

    cy.get('.btn').click()
    cy.get('.filters > :nth-child(2) > .form-control').should('be.enabled')
    cy.get('.filters > :nth-child(2) > .form-control').type("jacobs")
    cy.get('.filters > :nth-child(2) > .form-control').should('contain','jacobs')
})
})
//TEST SUIT 3:-
describe('TEST SUIT 1', () =>{
    it('In "Single checkbox demo" section, the test should select the checkbox, and make sure that the error message is shown', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html')
        cy.get('#isAgeSelected').click()
        cy.get('#txtAge').should('be.visible')
    })
    
    it('In "Multiple checkbox demo" section, the test should click on "check All" button and make sure that all checkboxes get selected.', () => {
    
        cy.get('#check1').click()
        cy.get('#txtAge').should('be.visible')
    })
})