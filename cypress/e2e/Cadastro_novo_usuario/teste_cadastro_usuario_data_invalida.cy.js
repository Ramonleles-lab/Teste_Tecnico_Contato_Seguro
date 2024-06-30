/// <reference types="Cypress"/>

describe('Teste funcional de novo cadastro de usuário', () => {
    it('Deve realizar cadastro add data invalida', () => {

        //star
        
        cy.ulr_novo_usuario()
        cy.dados_usuario('ramon','ramon_leles@gmail.com','92994086175','Manaus','2027-05-12')
        cy.salvar_usuario()
        cy.wait(5000)
        cy.validar_cadastro_usuario('ramon','ramon_leles@gmail.com','92994086175','12/05/2027','Manaus')

        //End

    });
});