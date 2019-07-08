import * as utils from '../../src/utils'

describe('Utils Test', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'))
  })

  it('add two numbers', () => {
    expect(utils.testFunc(2,3)).to.equal(5)
  })
})