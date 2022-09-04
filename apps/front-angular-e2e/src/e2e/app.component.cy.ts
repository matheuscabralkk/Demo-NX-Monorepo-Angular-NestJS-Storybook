describe('front-angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('monorepo-demo-root').should('exist');
  });
});
