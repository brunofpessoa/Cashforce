/* eslint-disable no-undef */
import { ordersMock, providerMock } from './mocks';

describe('Home page', () => {
  beforeEach(() => {
    const endpoint = 'http://localhost:3000';

    cy.intercept('GET', endpoint, {
      statusCode: 200,
      body: ordersMock,
    });
    cy.intercept('GET', `${endpoint}/provider/1`, {
      statusCode: 200,
      body: providerMock,
    });

    cy.visit('http://localhost:5173');
  });

  it('should display the correct order', () => {
    cy.contains('td', '123456');
    cy.contains('td', 'SACADO MOCK');
    cy.contains('td', 'CEDENTE MOCK');
    cy.contains('td', '01/01/2023');
    cy.contains('td', 'R$ 1.000,00');
    cy.contains('td', 'Pendente de confirmação');
  });

  it('should display the provider details', () => { 
    cy.contains('Dados do cedente').click();
    
    cy.contains('h2', 'Dados do cedente');
    cy.contains('p', 'CEDENTE MOCK');
    cy.contains('p', 'CEDENTE MOCK LTDA');
    cy.contains('p', '00000000000000');
  });

  it('should close details popup', () => {
    cy.contains('Dados do cedente').click();

    cy.contains('h2', 'Dados do cedente').should('exist');
    
    cy.get('.btn-close').click();
  
    cy.contains('h2', 'Dados do cedente').should('not.exist');
  });
});