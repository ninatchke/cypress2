//Test 1: Login with valid user (custom command)
//Test 2: Edit account details
//Test 3: Add or edit address
//Test 4: Change password
describe('AutomationTestStore User Account Tests', () => {
  const LoginName = 'ninatchke'; 
  const password = 'Password123!'; 

  // Before each test, perform login
  beforeEach(() => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login');
    cy.get('input[name="loginname"]').type(LoginName);
    cy.get('input[name="password"]').type(password);
    cy.get('button[title="Login"]').click();
    cy.url().should('include', 'account/account');
  });
    it('Edits account details', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/edit');
    cy.get('input[name="firstname"]').clear().type('Natia');
    cy.get('input[name="lastname"]').clear().type('Cypress');
    cy.get('button[title="Continue"]').click();
    cy.contains('Success: Your account has been successfully updated.').should('be.visible');
    cy.visit('https://automationteststore.com/index.php?rt=account/edit');
    cy.get('input[name="firstname"]').should('have.value', 'Natia');
    cy.get('input[name="lastname"]').should('have.value', 'Cypress');
});

it('should add new address successfully', () => {
    //cy.contains('Manage Address Book').should('be.visible').click();
    cy.get('.side_account_list > :nth-child(5) > a').click();
    cy.contains('New Address').should('be.visible').click();
    cy.get('input[name="firstname"]').should('be.visible').type('Natia');
    cy.get('input[name="lastname"]').should('be.visible').type('Tester');
    cy.get('input[name="address_1"]').should('be.visible').type('35 Cypress');
    cy.get('input[name="city"]').should('be.visible').type('Telavi');
    cy.get('#AddressFrm_country_id').select('Georgia');
    cy.get('#AddressFrm_zone_id').select('Kakheti')
    cy.get('#AddressFrm_postcode').should('be.visible').type('42100');
    cy.get('button[title="Continue"]').should('be.visible').click();
    cy.contains(' Your address has been successfully inserted').should('be.visible');
    cy.get('table') 
    .should('contain.text', '35 Cypress')
    .and('contain.text', 'Telavi')
    .and('contain.text', 'Kakheti')
    .and('contain.text', '42100');
});
    it('should change password successfully', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/password');
    cy.get('#PasswordFrm_current_password').type('Password123!');
    cy.get('#PasswordFrm_password').type('Password123!');
    cy.get('#PasswordFrm_confirm').type('Password123!');
    cy.get('button[title="Continue"]').click();
    cy.contains('Your password has been successfully updated').should('be.visible');
});
});
