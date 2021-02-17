describe('Login', () => {
    it('valid user credentials', () => {
        cy.visit('https://qa.manna-irrigation.com/login');
        cy.get('.iCenter').click();
        cy.get('.has-error > .form-control').click();
        cy.get('.form-main-row:nth-child(1) .form-control').type('14276@manna.qa');
        cy.get('.form-main-row:nth-child(2) .form-control').type('123456');
        cy.get('#sign-in-btn').click();
        cy.get('#login').submit();
    })
  })