///<reference types="cypress"/>

import loc from '../support/locators'

before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")
    cy.get('h3').contains('Campo de Treinamento')


})

describe('Campo Texto', () => {
    it('inserindoo nome e sobre nome', () => {
        cy.get(loc.campotexto.nome).should('be.empty').and('be.visible').and('exist')
        cy.get(loc.campotexto.nome).type('Maycon')
        cy.get(loc.campotexto.sobrenome).type('Porto')
        cy.get('#elementosForm').type('Gostaria muito de uma oportunidade de  ser contratado!')

    })
})

describe('CHECKBOX', () => {
    it('Opçoes Checkbox', () => {
        cy.get(loc.SEXO_M_F.masculino).should('be.empty')
        cy.get(loc.SEXO_M_F.masculino).click()
        cy.get(loc.CMD_FAVORITA.Pizza).should('be.empty')
        cy.get(loc.CMD_FAVORITA.Pizza).click()
        cy.screenshot('foto da tela')
    })
})
describe('SELECT', () => {
    it('Selecionando escolaridade', () => {
        cy.get(loc.ESCOLRDADE.escolaridade).should('be.visible')
        cy.get(loc.ESCOLRDADE.escolaridade).select('Superior')
    })
    it('Selecionando esporte', () => {
        cy.get(loc.PT_ESPORTES.esportes).should('be.visible')
        cy.get(loc.PT_ESPORTES.esportes).select('Corrida')
    })
})
describe('Botoes: Cadastra / Voltar', () => {
    it('Botão cadastrar', () => {
        cy.get(loc.BTN_CADASTRO.botaocadastro).click()
        cy.get('#resultado > :nth-child(1)').contains('Cadastrado!')


    })
    it('Botão Voltar', () => {
        cy.get(loc.BTN_VOLTAR.botaoVoltar).click()
        cy.get('#resultado').contains('Voltou!')



    })
    describe('limpando a pagina', () => {
        it('Limpando todos os campos', () => {
            cy.get('#elementosForm').reload()




        })
    })
})