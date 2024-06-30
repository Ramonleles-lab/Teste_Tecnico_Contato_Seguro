/// <reference types="Cypress"/>

describe('Teste funcional de novo cadastro de usuário', () => {
    it('Deve realizar cadastro sem add empresa', () => {

        //star
        
        cy.ulr_novo_usuario()
        cy.dados_usuario_sem_add_empresa('ramon','ramon_leles@gmail.com','92994086175','Manaus','1990-05-12')
        cy.salvar_usuario()
        cy.wait(5000)
        cy.validar_cadastro_usuario_sem_add_empresa()

        //End

    });
});