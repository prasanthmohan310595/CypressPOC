import 'cypress-xpath'
import MakeMyTripPage from '../page_objects/mmt';

const mmt_page = new MakeMyTripPage();


before(function () {
  cy.visit('https://www.makemytrip.com/hotels/')
})

it('Display the second least price hotel', () => {
  
  mmt_page.getBtnCitySelection().click()
  mmt_page.getIptCitySelection().type('Bangalore')
  mmt_page.getLstCityItem('Bangalore').click()
  mmt_page.getDate('Wed Apr 26 2023').click()
  mmt_page.getDate('Sun Apr 30 2023').click()
  mmt_page.selectRoomsAndGuests(1,2,1)
  mmt_page.getSearchBtn().click()
  mmt_page.getCheckBoxPricePerNight('₹ 6000 - ₹ 9500').click()
  mmt_page.getBtnLowestFirst().click()
  console.log(mmt_page.getHotelItem(2).invoke('text')
  .then((text)=>{
  console.log(text);
  }))

})