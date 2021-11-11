import LoginPage from '../page_objects/login_page';
import CSSStyles from '../page_objects/css_styles';
import 'cypress-xpath'

const login_page = new LoginPage();
const css_styles = new CSSStyles();


before(function () {
  login_page.performUserLogin()
})

beforeEach(() => {
    Cypress.Cookies.preserveOnce('JSESSIONID', 'remember_token')
})

it('Validates Add Account Styles', () => {
    css_styles.getAddAccount().should('have.css', 'background-color', 'rgb(4, 123, 248)')
})


it('Validates Make Payment Styles', () => {
  css_styles.getMakePayment().should('have.css', 'border-color', 'rgb(36, 179, 20)')
})