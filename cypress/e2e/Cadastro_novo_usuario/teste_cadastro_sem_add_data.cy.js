/// <reference types="Cypress"/>

describe('Teste funcional de novo cadastro de usuário', () => {
    it('Deve realizar cadastro sem add data de nascimento', () => {

        //star
        
        cy.ulr_novo_usuario()
        cy.dados_usuario_sem_add_data_de_nascimento('ramon','ramon_leles@gmail.com','92994086175','Manaus')
        cy.salvar_usuario()
        cy.wait(5000)
        cy.validar_cadastro_usuario_sem_add_data()

        //End

    });
});