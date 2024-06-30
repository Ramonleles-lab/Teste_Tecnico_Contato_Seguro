/// <reference types="Cypress"/>

describe('Teste funcional de novo cadastro de usuário', () => {
    it('Deve realizar cadastro sem add telefone do usuario', () => {

        //star
        
        cy.ulr_novo_usuario()
        cy.dados_usuario_sem_add_telefone('ramon','ramon_leles@gmail.com','Manaus','1990-05-12')
        cy.salvar_usuario()
        cy.wait(5000)
        cy.validar_cadastro_usuario_sem_add_telefone('ramon','ramon_leles@gmail.com','12/05/1990','Manaus')

        //End

    });
});