describe('front-angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('monorepo-demo-nx-welcome').should('exist');
  });
});
