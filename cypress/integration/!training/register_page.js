describe('Register new user', function(){
    it.only('Correct one', function(){
        cy.visit('/register')
        let randomName = 'validname' + Math.floor(Math.random(1000))
        let randomEmail = randomName + 'email@com'
        cy.get('[placeholder=Username]').type(randomName)
        cy.get('[placeholder=Email]').type(randomEmail)
        cy.get('[placeholder=Password]').type('no password')
        cy.get('[data-test="sign-up"]').click()
    })
})