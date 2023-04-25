import 'cypress-xpath'
import MakeMyTripPage from '../page_objects/mmt';

const mmt_page = new MakeMyTripPage();


beforeEach(function () {
  cy.visit('https://www.makemytrip.com/')
})

it('Display the second least price hotel', () => {
  
  mmt_page.getBtnHotels().click()
  mmt_page.getBtnCitySelection().click({force:true})
  mmt_page.getIptCitySelection().type('Bangalore',{force: true} )
  mmt_page.getLstCityItem('Bangalore').click()
  mmt_page.getDate('Wed Apr 26 2023').click({force: true})
  mmt_page.getDate('Sun Apr 30 2023').click({force: true})
  mmt_page.selectRoomsAndGuests(1,2,1)
  mmt_page.getSearchBtn().click({force: true})
  mmt_page.getCheckBoxPricePerNight('₹ 6000 - ₹ 9500').click({force: true})
  mmt_page.getBtnLowestFirst().click({force: true})
  console.log(mmt_page.getHotelItem(2).invoke('text')
  .then((text)=>{
  cy.log(text);
  }))

})