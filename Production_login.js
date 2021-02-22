
describe('Manna Production', () => {
    it('Login', () => {
        cy.visit('https://app.manna-irrigation.com/login');
        cy.get('.iCenter').click();
        cy.get('.has-error > .form-control').click();
        cy.get('.form-main-row:nth-child(1) .form-control').type('ios@prod.com');
        cy.get('.form-main-row:nth-child(2) .form-control').type('123456');
        cy.get('#sign-in-btn').click();
        cy.get('#login').submit();
        cy.get('#manna-icon svg').click();
        cy.get('.fa-cog').click();
    })
  })