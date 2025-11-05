///reference types="cypress/>"
describe('Funcionalidade:cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve completar cadastro com sucesso', () => {
        cy.get('#reg_email').type('user123@gmail.com')
        cy.get('#reg_password').type('senha@123')
        cy.get(':nth-child(4) > .button').click()
        //deve executar somente na primeira vez e a partir da segunda tentativa deve mostrar mensagem de erro
    });
});

//Usando faker-js
import { faker} from '@faker-js/faker'
describe('Funcionalidade:cadastro com faker', () => {
    it('Deve completar cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('senha@1234')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

    });
});

//Com variáveis
describe('Funcionalidade: cadastro usando variáveis', () => {
    it('Deve completar cadastro com sucesos - usando variáveis', () => {
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var email = faker.internet.email(nome)
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('senha@1234')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });
});