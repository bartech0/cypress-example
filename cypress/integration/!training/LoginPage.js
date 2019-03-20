describe('Login user', function(){
    it.only('Already registered one', function(){
        cy.visit('http://test-backend.koncikowski.pl/login')
        cy.get('[placeholder=Email]').type('private@email.com')
        cy.get('[placeholder=Password]').type('no password')
        cy.get('[type=submit]').click()
        cy.get('.article-preview').contains('No articles are here... yet.')
    })
})