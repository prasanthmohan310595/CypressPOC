// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from '../integration/page_objects/login_page'
const loginPage = new LoginPage()
Cypress.Commands.add("envLogin", () => {
    // cy.visit('/')
    cy.visit(Cypress.env('host'))
  
    loginPage.getUsername()
      .type(Cypress.env('username'))
  
    loginPage.getPassword()
      .type(Cypress.env('password'))
  
    loginPage.getLoginBtn()
      .click()
  })

Cypress.Commands.add("form_request", (url, formData) => {
    return cy
      .intercept("POST", url)
      .as("formRequest")
      .window()
      .then(win => {
        var xhr = new win.XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send(formData);
      })
      .wait("@formRequest");
})

Cypress.Commands.add('UIless', () => {
  cy.request({
    method: 'POST',
    url: (Cypress.env('host').concat('/j_spring_security_check')), // baseUrl is prepended to url
    form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      j_username: (Cypress.env('username')),
      j_password: (Cypress.env('password')),
      UniqueDateTime_DCP: '1626621847492',
      referringPag: ' ',
    }
  })
  .then ((requests) => {
    window.localStorage.setItem('JSESSIONID', ((requests
    .allRequestResponses[0]["Request Headers"].cookie)
    .split('JSESSIONID=')[1]))
  })
})