describe('Create new post', function(){
    it.only('Valid new post', function(){
        cy.server()
        cy.route({
            method: 'POST',
            url: 'http://test-backend.koncikowski.pl/api/users/login',
            response:{
                    user:{
                        email: 'private@email.com',
                        password: 'no password',
                        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYTRlMWU2MjhhOWY0MDAxNGQ1MmQyNCIsInVzZXJuYW1lIjoic3BpbnF1aXNpdGlvbiIsImV4cCI6MTU0MjcyMjYyMiwiaWF0IjoxNTM3NTM4NjIyfQ.ZK4HQ4maq2Jk5nqXbZ4-M3MCrqsUnCzBqxPWdUI4wSA"
                        }
            }
        }).as('aliasPlaceholder')

        // cy.get('[placeholder=Article Title]').type('Bart Valid Title')
    })  
})