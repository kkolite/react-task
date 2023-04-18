describe('Form', () => {
  it('Create form', () => {
    cy.visit('http://localhost:3000/form');
    cy.get('[name="name"]').type('Name');
    cy.get('[name="date"]').type('2012-02-02');
    cy.get('[name="region"]').select('BY');
    cy.get('[name="check"]').click();
    cy.get('[name="file"]').selectFile('./cypress/money.png');
    cy.get('.form__submit').click();
    cy.get('.card__list');
    cy.get('.user-post__img');
  })
})