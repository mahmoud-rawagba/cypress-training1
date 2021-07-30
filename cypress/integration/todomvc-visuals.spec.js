/// <reference types="cypress" />
//import { before } from 'cypress/types/lodash'
//import * as todoPage from '../page-objects/todo-page'
import TodoPage from '../page-objects/todo-page'

describe('visual validation', () => {
    const todoPage = new TodoPage()
    before(() =>
    todoPage.navigate()
     ) 
     
       it('should look good', () => {
         todoPage.addTodo('Clean room')
         todoPage.addTodo('Learn JavaScript')

         todoPage.toggleTodo(0)
     }) 
})