import 'cypress-xpath'

export default class CSSStyles{


    getAddAccountStyle(){
        return cy.xpath('//a[@class="btn btn-primary btn-sm"]').should('have.css', 'background-color', 'rgb(4, 123, 248)'),
        cy.xpath('//a[@class="btn btn-primary btn-sm"]').should('have.css', 'border-color', 'rgb(4, 123, 248)')
    }

    getMakePayment(){
        return cy.xpath('//a[@class="btn btn-success btn-sm"]').should('have.css', 'background-color', 'rgb(36, 179, 20)'),
        cy.xpath('//a[@class="btn btn-success btn-sm"]').should('have.css', 'border-color', 'rgb(36, 179, 20)')
    }


}
