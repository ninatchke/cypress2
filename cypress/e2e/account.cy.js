//Test 1: Login with valid user (custom command)
//Test 2: Edit account details
//Test 3: Add or edit address
//Test 4: Change password
describe('AutomationTestStore User Account Tests', () => {
  const loginName = 'ninatchke';
  const password = 'Testing2025!';

  beforeEach(() => {
    cy.login(loginName, password);
  });

 it('should edit account details', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/account');
     cy.contains('Edit account details').should('be.visible').click({ force: true });
     cy.wait(3000);
    cy.get('input[name="firstname"]').clear().type('Natia');
    cy.get('input[name="lastname"]').clear().type('Cypress');
    cy.get('button[title="Continue"]').click();
    cy.contains('Success: Your account has been successfully updated.').should('be.visible');
  });

  it('should add new address successfully', () => {
    cy.contains('Manage Address Book').click();
    cy.contains('New Address').click();
    cy.get('input[name="firstname"]').type('Natia');
    cy.get('input[name="lastname"]').type('Tester');
    cy.get('input[name="company"]').type('Company Tester');
    cy.get('input[name="address_1"]').type('35 Cypress');
    cy.get('input[name="city"]').type('Telavi');
      cy.get('select[name="Region/State"]').select(randomValue || 'Some State');
    cy.get('input[name="ZIP/PostCode"]').type('42100');
    cy.get('select[name="country"]').select('Georgia');
    cy.get('button[title="Continue"]').click();
    cy.contains('Your address has been successfully added').should('be.visible');
  });

  it('should change password successfully', () => {
    cy.contains('Change Password').click();
    cy.get('input[name="Current password"]').type('Testing2025!');
    cy.get('input[name="New Password"]').type('Password123!');
    cy.get('input[name="confirm New Password"]').type('Password123!');
    cy.get('button[title="Continue"]').click();
    cy.contains('Your password has been successfully updated').should('be.visible');
  });
});