import 'cypress-xpath'

export default class LoginPage {
    //txt - text field
    //btn - button
    //link - link
    //radio button - rb

    getUsername(){
        return cy.xpath('//input[@id="username"]')
    }
    getPassword(){
        return cy.xpath('//input[@id="password"]')
    }
    getLoginBtn(){
        return cy.xpath('//a[@id="log-in"]')
    }

    performUserLogin() {
        // cy.visit('/')
        cy.visit(Cypress.env('host'))

        this.getUsername()
            .type(Cypress.env('username'))

        this.getPassword()
            .type(Cypress.env('password'))

        this.getLoginBtn()
            .click()
    }
}
