/// <reference types="Cypress"/>

describe('Teste funcional para deletar cadastro de usuário', () => {
    it('Deve deletar usuario cadastrado com sucesso', () => {

        //star
        
        cy.ulr_novo_usuario()
        cy.dados_usuario('joão','ramon_leles@gmail.com','92994086175','Manaus','1990-05-12')
        cy.salvar_usuario()
        cy.wait(5000)
        cy.botao_deletar()
        cy.validar_mensagem_usuario_deletado()

        //End

    });
});