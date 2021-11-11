import 'cypress-xpath'

export default class CSSStyles{


    getAddAccount(){
        return cy.xpath('//a[@class="btn btn-primary btn-sm"]')
    }

    getMakePayment(){
        return cy.xpath('//a[@class="btn btn-success btn-sm"]')
    }


}
