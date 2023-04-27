describe('Navbar & About Page', () => {
  it('Have links', () => {
    cy.visit('/');
    cy.contains('About');
    cy.contains('Cards');
    cy.contains('Form');
  })

  it('Have text', () => {
    cy.visit('/about');
    cy.contains('Our mission');
  })

  it('Have input', () => {
    cy.visit('/cards');
    cy.get('input');
  })

  it('Load images and open modal window', () => {
    cy.visit('/cards');
    cy.get('input').type('japan');
    cy.get('.card__list');
    cy.contains('More info').click();
    cy.contains('Likes');
  })

  it('Mock test (without it coverage doesn\'t work)', () => {
    expect(true).to.equal(true);
  });
})
