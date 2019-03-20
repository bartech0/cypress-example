import { loremIpsum } from "lorem-ipsum";

var i = 0;
for (i = 0; i < 10 ; i++) 
{   describe('send cv', function(){
    it.only('Send CV via form', function(){
        var names = ['Orlando Crippen', 'Drusilla Thornberry', 'Awilda Bumgarner', 'Sydney Schlegel', 'Slyvia Hertz', 'Bryce Saul', 'Loria Boehme', 'Josiah Eichenlaub', 'Clark Orme', 'Booker Brinkmann', 'Latoyia Kloss', 'Carlyn Lamphere', 'Bonnie Kilbourn', 'Carlie Lynn', 'Bryanna Forshee', 'Kandi Pullen', 'Greg Mccubbin', 'Vincent Ashworth', 'Jules Raggs', 'Zana Lunsford', 'Ok Hurlburt', 'Lawanna Mire', 'Cindi Spier', 'Heriberto Starbuck', 'Layla Burget', 'Genna Bollman', 'Ruben Cummingham', 'Sherie Hossain', 'Gregorio Pendergraft', 'Kaylene Pigg', 'Clay Silliman', 'Deb Deveau', 'Leeanna Mirarchi', 'Roslyn Manis', 'Elma Garoutte', 'Whitney Camacho', 'Telma Marriner', 'Rachal Kroh', 'Julius Cullison', 'Maud Dison', 'Suanne Garzon', 'Claudette Wilkes', 'Shavon Polich', 'Abigail Stokes', 'Alesha Weymouth', 'Josh Decker', 'Lean Levy', 'Aretha Ribera', 'Marlyn Madore', 'Carie Angle']
        var randomName = names[Math.floor(Math.random() * names.length)]
        let randomEmail = Math.random().toString(36).substring(2, 15) + '@email.com'

        cy.visit('/jobs/12648-unity-developer-6000-13000-at-picadilla')
        cy.get('#show_application_form').click()
        cy.get('#job_application_name').type(randomName)
        cy.get('#job_application_email').type(randomEmail)
        cy.get('#job_application_message').type(loremIpsum())
        cy.get('#job_application_human_check').type('kot')
        cy.get('[name=commit]').click()
        cy.get('[role=alert]').contains('Zgłoszenie zostało wysłane. Powodzenia!')
    })
    })
}
