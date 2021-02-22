
describe('ynet', () => {
    it('ynet scrolling aroung', () => {
        cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html');
        cy.get('.INDlangdirRTL > div:nth-child(14) > div').click();
        cy.get('#SkHTLVoZFgzu > .slotSubTitle > span').click();
        cy.url().should('contains', 'https://www.ynet.co.il/news/article/BkJrYVefu');
        cy.url().should('contains', 'https://www.ynet.co.il/YediothPortal/Ext/Comp/Teaser/MarketSchedual_New/CdaMarketSchedualIframe_New/0,20770,0,00.html');
        cy.get('#H1HSF00eKgM00 > img').click();
        cy.url().should('contains', 'https://www.ynet.co.il/home/0,7340,L-8,00.html');
        cy.url().should('contains', 'https://www.ynet.co.il/articles/0,7340,L-5888111,00.html');
        cy.url().should('contains', 'https://buy.tinypass.com/checkout/template/show');
    })
  })