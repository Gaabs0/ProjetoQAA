/// <reference types="cypress" />

context('Logins valídos e inválidos', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    it('Login válido - Usuário padrão', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });
    it('Login inválido - Usuário errado', () => {
         cy.get('[data-test="username"]').type('standard_errado');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

    
    });

    it('Login inválido - senha errada', () => {
        cy.get('[data-test="username"]').type('standard_user');;
        cy.get('[data-test="password"]').click();
        cy.get('[data-test="password"]').type('secret_errada');
        cy.get('[data-test="login-button"]').click();

        
    });

    it('Login inválido - Username em branco', () => {
        cy.get('[data-test="username"]').click();
        cy.get('[data-test="password"]').click();
        cy.get('[data-test="password"]').type('secret_sauce{enter}');
        cy.get('[data-test="login-button"]').click();
        
    });

    
    it('Login inválido - Password em branco', () => {
        cy.get('[data-test="username"]').click();
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').click();
        cy.get('[data-test="login-button"]').click();



    });

});
