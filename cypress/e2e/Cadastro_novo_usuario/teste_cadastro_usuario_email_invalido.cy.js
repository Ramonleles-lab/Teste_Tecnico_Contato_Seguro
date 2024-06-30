/// <reference types="Cypress"/>

describe('Teste funcional de novo cadastro de usuário com e-mail inválido', () => {
    it('O sistema deve evitar que usuário se cadastre com e-mail inválido', () => {

        //Star

        cy.ulr_novo_usuario()
        cy.dados_usuario('ramon','ramon_leles#gmail.com','92994086175','Manaus','1990-05-12')
        cy.salvar_usuario()
        cy.validar_cadastro_usuario('ramon','ramon_leles#gmail.com','92994086175','12/05/1990','Manaus')

        //End

    });
});