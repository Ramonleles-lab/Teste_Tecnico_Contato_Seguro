/// <reference types="Cypress"/>

describe('Teste funcional de novo cadastro de usuário', () => {
    it('Deve realizar cadastro com sucesso', () => {

        //star
        
        cy.ulr_novo_usuario()
        cy.dados_usuario('ramon','ramon_leles@gmail.com','92994086175','Manaus','1990-05-12')
        cy.salvar_usuario()
        cy.wait(5000)
        cy.botao_editar()

        //End

    });
});