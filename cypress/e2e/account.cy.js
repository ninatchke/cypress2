//Test 1: Login with valid user (custom command)
//Test 2: Edit account details
//Test 3: Add or edit address
//Test 4: Change password
describe('AutomationTestStore User Account Tests', () => {
  const email = 'testuser123@email.com';
  const password = 'Password123!';

  beforeEach(() => {
    cy.login(email, password);
  });

  it('should edit account details successfully', () => {
    cy.contains('Edit Account').click();
    cy.get('input[name="firstname"]').clear().type('Nino');
    cy.get('input[name="lastname"]').clear().type('Cypress');
    cy.get('button[title="Continue"]').click();
    cy.contains('Your account has been successfully updated').should('be.visible');
  });

  it('should add new address successfully', () => {
    cy.contains('Address Book').click();
    cy.contains('New Address').click();
    cy.get('input[name="firstname"]').type('Nino');
    cy.get('input[name="lastname"]').type('Tester');
    cy.get('input[name="address_1"]').type('123 Cypress Way');
    cy.get('input[name="city"]').type('Tbilisi');
    cy.get('input[name="postcode"]').type('0100');
    cy.get('select[name="country_id"]').select('Georgia');
    cy.get('select[name="zone_id"]').select(1);
    cy.get('button[title="Continue"]').click();
    cy.contains('Your address has been successfully added').should('be.visible');
  });

  it('should change password successfully', () => {
    cy.contains('Change Password').click();
    cy.get('input[name="password"]').type('Password123!');
    cy.get('input[name="confirm"]').type('Password123!');
    cy.get('button[title="Continue"]').click();
    cy.contains('Your password has been successfully updated').should('be.visible');
  });
});