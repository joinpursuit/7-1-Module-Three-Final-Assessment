describe("has a Home Page", () => {
  it("can visit the home page", () => {
    cy.visit("http://localhost:3000/");

  })
  
  it("has a welcome message", () => {
    cy.contains("Welcome to GhibliApp");
  })

  it("has a NavBar", () => {
    cy.hasNavBar()
  });
});