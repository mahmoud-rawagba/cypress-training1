/// <reference types="cypress" />

/*it('sould be able to add a new todo to the list', ()=>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    
    cy.get('.new-todo',{timeout: 6000}).type("clean room{enter}")
    cy.get('label').should('have.text', 'clean room')
    
    cy.get('.toggle').should('not.be.checked')
    
    cy.get('.toggle').click()
    cy.get('label').should('have.css','text-decoration-line','line-through')
    
    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants','li')
})*/
import { TodoPage } from "../page-objects/todo-page";
describe('todo actions', () =>{
    const todoPage = new TodoPage()

beforeEach(() => {
    todoPage.navigate()

    todoPage.addTodo('clean room')
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    
    cy.get('.new-todo',{timeout: 6000}).type("clean room{enter}")
})

it('should be able to add a new todo to the list', ()=>{
    todoPage.validateTodoText(0,'clean room')
    
    cy.get('.toggle').should('not.be.checked')
})


it('should mark a todo as completed', ()=>{
    cy.get('.toggle').click()
    cy.get('label').should('have.css','text-decoration-line','line-through')

})

it.only('should clear completed todos', ()=>{
    cy.get('.toggle').click()
    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants','li')

})
})