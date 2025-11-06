/// <reference types="cypress"/>
describe('Funcionalidade: produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.block-inner')
        .first()
        //.last()
        //.eq(3)
        .click()
        cy.get('.product_title').should('contain','Abominable Hoodie')
        
    });
});