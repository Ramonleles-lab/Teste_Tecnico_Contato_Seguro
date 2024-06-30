/// <reference types="Cypress"/>

Cypress.Commands.add('ulr_novo_usuario',()=>{
    cy.visit("http://localhost:5400/")
    cy.get('#new-user').click();

})

Cypress.Commands.add('dados_usuario',(name,email,number,city,date)=>{
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.contains('Empresa 3').click();  // Clica diretamente em 'Empresa 3'

})  

Cypress.Commands.add('validar_cadastro_usuario',(name,email,number,city,date)=>{
    //validando_usuario_novo
    cy.get('tbody > tr > :nth-child(1)').contains(name);
    cy.get('tbody > tr > :nth-child(2)').contains(email);
    cy.get('tbody > tr > :nth-child(3)').contains(number);
    cy.get('tbody > tr > :nth-child(4)').contains(date);
    cy.get('tbody > tr > :nth-child(5)').contains(city);

})

Cypress.Commands.add('validar_cadastro_usuario_1',(name,email,number,city,date)=>{
    //validando_usuario_1
    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains(name);
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains(email);
    cy.get('tbody > :nth-child(1) > :nth-child(3)').contains(number);
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains(date);
    cy.get('tbody > :nth-child(1) > :nth-child(5)').contains(city);

})

Cypress.Commands.add('validar_cadastro_usuario_2',(name,email,number,city,date)=>{
    //validando_usuario_2
    cy.get('tbody > :nth-child(2) > :nth-child(1)').contains(name);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains(email);
    cy.get('tbody > :nth-child(2) > :nth-child(3)').contains(number);
    cy.get('tbody > :nth-child(2) > :nth-child(4)').contains(date);
    cy.get('tbody > :nth-child(2) > :nth-child(5)').contains(city);

})

Cypress.Commands.add('dados_usuario_2',(name,email,number,city,date)=>{
    //dados_usuario_2_teste_duplicado
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.contains('Empresa 1').click();  // Clica diretamente em 'Empresa 3'
})

Cypress.Commands.add('dados_usuario_sem_add_cidade',(name,email,number,date)=>{
    //dados_usuario_2_teste_duplicado
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.contains('Empresa 1').click();  // Clica diretamente em 'Empresa 3'
})

Cypress.Commands.add('validar_cadastro_usuario_sem_add_cidade',(name,email,number,date)=>{
    //validando_usuario_novo
    cy.get('tbody > tr > :nth-child(1)').contains(name);
    cy.get('tbody > tr > :nth-child(2)').contains(email);
    cy.get('tbody > tr > :nth-child(3)').contains(number);
    cy.get('tbody > tr > :nth-child(4)').contains(date);

})

Cypress.Commands.add('dados_usuario_sem_add_data_de_nascimento',(name,email,number,city)=>{
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('#search_input').click();
    cy.contains('Empresa 3').click();  // Clica diretamente em 'Empresa 3'

})

Cypress.Commands.add('validar_cadastro_usuario_sem_add_data',()=>{
    //validando_usuario_novo_sem_add_data
    cy.get('[placeholder="Data de nascimento"]').then(($input) => {
        $input[0].reportValidity();
        
        // Verifique a mensagem de validação
        expect($input[0].validationMessage).to.eq('Preencha este campo.');
      });

})

Cypress.Commands.add('dados_usuario_sem_add_email',(name,number,city,date)=>{
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.contains('Empresa 3').click();  // Clica diretamente em 'Empresa 3'
    
})

Cypress.Commands.add('validar_cadastro_usuario_sem_add_email',()=>{
    //validando_usuario_novo_sem_add_data
    cy.get('[placeholder="Email"]').then(($input) => {
        $input[0].reportValidity();
        
        // Verifique a mensagem de validação
        expect($input[0].validationMessage).to.eq('Preencha este campo.');
      });

})

Cypress.Commands.add('dados_usuario_sem_add_empresa',(name,email,number,city,date)=>{
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)

})

Cypress.Commands.add('validar_cadastro_usuario_sem_add_empresa',()=>{
    //validando_usuario_novo_sem_add_data
    cy.get('i').contains('Insira as empresas do usuário!');

})

Cypress.Commands.add('dados_usuario_sem_add_nome',(email,number,city,date)=>{
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.contains('Empresa 3').click();  // Clica diretamente em 'Empresa 3'

})  

Cypress.Commands.add('validar_cadastro_usuario_sem_add_nome',()=>{
    //validando_usuario_novo_sem_add_data
    cy.get('[placeholder="Nome"]').then(($input) => {
        $input[0].reportValidity();
        
        // Verifique a mensagem de validação
        expect($input[0].validationMessage).to.eq('Preencha este campo.');
      });

})

Cypress.Commands.add('dados_usuario_sem_add_telefone',(name,email,city,date)=>{
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.contains('Empresa 3').click();  // Clica diretamente em 'Empresa 3'
})

Cypress.Commands.add('validar_cadastro_usuario_sem_add_telefone',(name,email,date,city)=>{
    //validando_usuario_novo
    cy.get('tbody > tr > :nth-child(1)').contains(name);
    cy.get('tbody > tr > :nth-child(2)').contains(email);
    cy.get('tbody > tr > :nth-child(3)').contains(city);
    cy.get('tbody > tr > :nth-child(4)').contains(date);
})

Cypress.Commands.add('salvar_usuario',()=>{
    cy.get('.sc-eCImPb > button').click({ force: true })

})

Cypress.Commands.add('botao_deletar',()=>{
    cy.get(':nth-child(7) > :nth-child(2)').click()

})

Cypress.Commands.add('validar_mensagem_usuario_deletado',()=>{
    //validando_mensagem
    cy.get('i').contains('Usuário deletado com sucesso!');

})

Cypress.Commands.add('botao_editar',()=>{
    cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1)').click()

})