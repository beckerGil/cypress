
describe('Login', () => {
    it('valid user credentials', () => {
        cy.visit('https://qa.manna-irrigation.com/login');
        cy.get('.iCenter').click();
        cy.get('.has-error > .form-control').click();
        cy.get('.form-main-row:nth-child(1) .form-control').type(Cypress.env('user_email'));
        cy.get('.form-main-row:nth-child(2) .form-control').type(Cypress.env('user_password'));
        cy.get('#sign-in-btn').click();
        cy.get('#login').submit();
        cy.url().should('include', 'https://qa.manna-irrigation.com/main/farm');
    })
  })