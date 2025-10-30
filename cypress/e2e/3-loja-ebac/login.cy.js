///<reference types="cypress"/>
describe ('funcionalidade: login', () => {
    beforeEach (() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
     })
      afterEach (() => {
        cy.screenshot()
     })

    it('deve fazer login com sucesso', () => {
        cy.get('#username').type('oli.via.pet@hotmail.com')
        cy.get('#password').type('Olivia8!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, oli.via.pet-3839')
        
    })

    it('Deve inserir uma mensagem de erro ao inserir usuário inválido', () => {
     cy.get('#username').type('usuario1nválido')
     cy.get('#password').type('Olivia8!')
     cy.get('.woocommerce-form > .button').click()
     //cy.get('.woocommerce-error > li').should('contain', 'Erro: O usuário usuario1nvalido não está registrado neste site.')
     cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => { 
      cy.get('#username').type('oli.via.pet@hotmail.com')
      cy.get('#password').type('senha-invalida1') 
      cy.get('.woocommerce-form > .button').click()   
      cy.get('.woocommerce-error').should('exist') 
    });

})