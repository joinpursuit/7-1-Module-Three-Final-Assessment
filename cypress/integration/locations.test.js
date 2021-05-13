describe("has a functioning Locations page", () => {
    it("can visit the locations page", () => {
        cy.visit("http://localhost:3000/locations");

        cy.contains("List of Locations");
        cy.get("button").contains("Show Locations");
    })
    
    it("can navigate to the locations page from the home page", () => {
        cy.visit("http://localhost:3000/");


        cy.contains("Welcome to GhibliApp");

        cy.get("a").contains("Locations").click()
        cy.url().should("eq", "http://localhost:3000/locations")
        cy.contains("List of Locations") 

        cy.get("button").contains("Show Locations")
    })
    
    it("has a NavBar", () => {
        cy.hasNavBar()
    });

    it("shows all locations when Show Locations is clcked", () => {
  
      cy.get("button").contains("Show Locations").click()
  
      cy.get("ul").children().should("have.length", 24)

      cy.findAllByRole("listitem").contains("Irontown")
      cy.findAllByRole("listitem").contains("The Marsh House")
      cy.findAllByRole("listitem").contains("Pazu's Mines")
      cy.findAllByRole("listitem").contains("Forest")
      cy.findAllByRole("listitem").contains("Ingary")

    })

    it("changes the button to Hide Locations", () => {
        cy.get("button").contains("Hide Locations")
    })

    it("hides all locations when Hide Locations is clicked", () => {
        cy.get("button").contains("Hide Locations").click()
        cy.get("ul").children().should("have.length", 0)
    })

    it("changes the button to Show Locations", () => {
        cy.get("button").contains("Show Locations")
    })

  })