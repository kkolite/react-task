describe('Cards page', () => {
  it('Have input', () => {
    cy.visit('http://localhost:3000/cards');
    cy.get('input');
  })

  it('Load images and open modal window', () => {
    cy.visit('http://localhost:3000/cards');
    cy.get('input').type('japan');
    cy.get('.card__list');
    cy.contains('More info').click();
    cy.contains('Likes');
  })
})
