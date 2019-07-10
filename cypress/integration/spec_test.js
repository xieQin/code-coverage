describe('Add Todo', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
    })

    it('shows header', () => {
        cy.contains('h1', 'My Todo App!').should('be.visible')
    })

    it('should be able to add new todo', () => {
        const firstTodo = 'Writing a blog'
        const secondTodo = 'Running'
        cy.get('[data-at="new-todo"]').type(`${firstTodo}{enter}`)
          .type(`${secondTodo}{enter}`)
        cy.get('[data-at="todoText"]').eq(0).should('contain', firstTodo)
        cy.get('[data-at="todoText"]').eq(1).should('contain', secondTodo)
        cy.get('[data-at="removeTodoBtn"]').should('have.length', 2)
    })

    it('should be able to delete todo', () => {
        const todoText = 'To be deleleted'
        cy.get('[data-at="new-todo"]').type(`${todoText}{enter}`)
        cy.get('[data-at="removeTodoBtn"]').click()
        cy.get('[data-at="noTodo"]').should('contain', 'No Anything Todo')
    })

    it('shows default message', () => {
        cy.get('#toggle-message').should(($div) => {
            expect($div.get(0).innerText).to.eq('default message')
        })
    })

    it('toggle message', () => {
        cy.get('#btn-toggle').click()
        cy.get('#toggle-message').should(($div) => {
            expect($div.get(0).innerText).to.eq('toggle message')
        })
        cy.get('#btn-toggle').click()
        cy.get('#toggle-message').should(($div) => {
            expect($div.get(0).innerText).to.eq('default message')
        })
    })
})