describe('Note app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2023')
  })

  it('login form can be opened', function() {
    cy.contains('login').click()
  })
  it('user can log in', function() {
    cy.contains('login').click()
    cy.get('#username').type('admin')
    cy.get('#password').type('pass')
    cy.get('#login-button').click()

    cy.contains('adminin salasana pass logged in')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000')
      cy.contains('login').click()
      cy.get('#username').type('admin')
      cy.get('#password').type('pass')
      cy.get('#login-button').click()
    })
  
    it('a new note can be created', function() {
      // cy.contains('new note').click()
      cy.get('#input').type('a note created by cypress')
      cy.get('#save-button').click()
      cy.contains('a note created by cypress')
    })

  
})


})