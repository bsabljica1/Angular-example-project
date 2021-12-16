/* eslint-disable prefer-const */
import { getGreeting } from '../support/app.po';

describe('aplikacija', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Title message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to the News App!');
  });

  it('should display the form', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.get('body')
  .then(($body) => {
    let formDiv = $body.find('div.formField');
      cy.wrap(formDiv).should('be.visible');

  })

  });


});
