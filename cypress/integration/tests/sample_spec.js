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
    css_styles.getAddAccountStyle()
})


it('Validates Make Payment Styles', () => {
  css_styles.getMakePayment()
})