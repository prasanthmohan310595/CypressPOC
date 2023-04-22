import 'cypress-xpath'

export default class MakeMyTripPage {
    //txt - text field
    //btn - button
    //link - link
    //radio button - rb

    getBtnHotels(){
        return cy.get('.chNavIcon.appendBottom2.chSprite.chHotels')
    }

    getBtnCitySelection(){
        return cy.get('#city')
    }
    getIptCitySelection(){
        return cy.xpath('//input[@placeholder="Enter city/ Hotel/ Area/ Building"]')
    }
    getLstCityItem(city){
        return cy.xpath(`//ul//p[contains(text(),'${city}')]`)
    }

    getDate(date){
        return cy.xpath(`//div[@aria-label='${date}']`)
    }
    
    selectRoomsAndGuests(rooms,adults,children){
        cy.xpath('//p[text()="Rooms"]/parent::div/following-sibling::div').click()
        cy.xpath(`//ul[@class="gstSlct__list"]/li[${rooms}]`).click()
        cy.xpath('//p[text()="Adults"]/parent::div/following-sibling::div').click()
        cy.xpath(`//ul[@class="gstSlct__list"]/li[${adults}]`).click()
        cy.xpath('//p[text()="Children"]/parent::div/following-sibling::div').click()
        cy.xpath(`//ul[@class="gstSlct__list"]/li[${children}]`).click()
        cy.get('.primaryBtn.btnApplyNew.pushRight.capText').click()
    }

    getSearchBtn(){
        return cy.xpath('//button[@id="hsw_search_button"]')
    }

    getCheckBoxPricePerNight(price){
        return cy.xpath(`//label[text()='${price}']/preceding-sibling::input`)
    }

    getBtnLowestFirst(){
        return cy.xpath('//span[normalize-space(text())="Price"]/span[text()="(Lowest First)"]')
    }

    getHotelItem(index){
        return cy.xpath(`(//p[@id='hlistpg_hotel_name']/span)[${index}]`)
    }



}