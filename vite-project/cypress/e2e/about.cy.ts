describe('Navbar', () => {
  it('Have links', () => {
    cy.visit('http://localhost:3000');
    cy.contains('About');
    cy.contains('Cards');
    cy.contains('Form');
  })
})

describe('About page', () => {
  it('Have text', () => {
    cy.visit('http://localhost:3000/about');
    cy.contains('Our mission');
  })
})