/// <reference types="cypress" />
// TEST SUIT #1
describe("Text Box Testing",() => {
    it("test data",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.fixture("task-2_Data.json").then((user) => {
        cy.get('#userName').type(user.fullName);
        cy.get('#userEmail').type(user.Email);
        cy.get('#currentAddress').type(user.currentAdd);
        cy.get('#permanentAddress').type(user.permanentAdd);
        cy.get('#submit').click()
        cy.get('.border').should('be.visible')
        cy.get('#name').should('contain','Name:'+user.fullName)
        cy.get('#email').should('contain','Email:'+user.Email)
        cy.get('.border').find('#currentAddress').should('contain','Current Address :'+user.currentAdd)
        cy.get('.border').find('#permanentAddress').should('contain','Permananet Address :'+user.permanentAdd)
    })
    })
    it("invalid email text because of no .com",() => {
        cy.visit("https://demoqa.com/text-box")
        cy.fixture("task-2_Data.json").then((user) => {
            cy.get('#userName').type(user.fullName);
            cy.get('#userEmail').type('noDotCom@');
            cy.get('#currentAddress').type(user.currentAdd);
            cy.get('#permanentAddress').type(user.permanentAdd);
            cy.get('#submit').click()
            cy.get('.field-error').should('have.css','border','1px solid rgb(255, 0, 0)')
    })
      })
})
//TEST SUIT #2:-
describe('Upload and Download Files', () =>{
    it('should Upload a File', () => {
        cy.visit('https://demoqa.com/upload-download')
        cy.get('#uploadFile').click()
        const filePath = '../fixtures/dummyData.json'
         cy.get('input[type="file"]').attachFile(filePath)
    })
}) 
//TEST SUIT #3:-
describe('TODOS', () =>{
    it('check the completed filter', () => {
        cy.visit('https://todomvc.com/examples/angularjs/#/')
        cy.fixture("task-2-test-suit3-data.json").then((todo) => {
        cy.get('.new-todo').type(todo.todo1+'{enter}')
        cy.get('.new-todo').type(todo.todo2+'{enter}')
        cy.contains('li',todo.todo1).find('.toggle').click()
        cy.contains('li',todo.todo1).find('.toggle').should('be.checked')
        cy.get('[href="#/completed"]').click()
      cy.contains('.todo-list',todo.todo1).should('be.visible')
      cy.get('.toggle').should('be.checked')
      cy.contains('.todo-count','1 item left')
    })
    })

    it('empty test',()=>{
        
    })
})