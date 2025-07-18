Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://automationteststore.com/index.php?rt=account/login');
  cy.get('input[name="loginname"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[title="Login"]').click();
});