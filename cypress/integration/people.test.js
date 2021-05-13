describe("has a functioning People page", () => {
    it("can visit the people page", () => {
        cy.visit("http://localhost:3000/people");

        cy.contains("Search for a Person");
        cy.get("input").should("have.attr", "placeholder", "Find Your Person");
        cy.get("button").contains("Submit");
    })

    it("can navigate to the people page from the home page", () => {
        cy.visit("http://localhost:3000/");

      
        cy.contains("Welcome to GhibliApp");

        cy.get("a").contains("People").click()
        cy.url().should("eq", "http://localhost:3000/people")

        cy.contains("Search for a Person")
    
        cy.get("input").should("have.attr", "placeholder", "Find Your Person")
        cy.get("button").contains("Submit")
    })

    it("has a NavBar", () => {
        cy.hasNavBar()
    });
  
  
    it("can type in a persons name, search for the person, and show the results", () => {
      cy.get("input").type("San")
      cy.get("button").click()
  
      cy.contains("San")
      cy.contains("17")
      cy.contains("Female")
    })
    
    it("can type in an invalid name and return Not Found", () => {
        cy.get("input").type("Peter Fiorentino")
        cy.get("button").click()
        
        cy.contains("Not Found")
    })
  })