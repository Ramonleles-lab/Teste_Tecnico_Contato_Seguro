/// <reference types="Cypress"/>

describe('Teste funcional de cadastro duplicado', () => {
    it('O sistema deve evitar cadastro duplicado', () => {

        //Star

        //primeiro_cadastro_do_usuario
        cy.ulr_novo_usuario()
        cy.dados_usuario('ramon','ramon_leles@gmail.com','92994086175','Manaus','1990-05-12')
        cy.salvar_usuario()
        cy.wait(5000)

        //segundo_cadastro_do_usuario
        cy.get('#new-user').click();
        cy.dados_usuario_2('ramon','ramon_leles@gmail.com','92994086175','Manaus','1990-05-12')
        cy.salvar_usuario()
        //validando_usuario_1_e_usuario_2
        cy.validar_cadastro_usuario_1('ramon','ramon_leles@gmail.com','92994086175','12/05/1990','Manaus')
        cy.validar_cadastro_usuario_2('ramon','ramon_leles@gmail.com','92994086175','12/05/1990','Manaus')

        //End

    });  
});

