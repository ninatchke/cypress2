Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://automationteststore.com/index.php?rt=account/login');
  cy.get('input[name="loginname"]').type('ninatchke');
  cy.get('input[name="password"]').type('Testing2025!');
  cy.get('button[title="Login"]').click();
});