describe("Navigation", () => {
  it("should navigate to the todo app demo page", () => {
    cy.visit("http://localhost:3000/home");
    cy.get("[data-cy=todo-app-demo-button]").click();
    // location() is used to get the current URL
    cy.location("pathname").should("eq", "/todo-tasks");
    // go() is used to navigate back to the previous page
    cy.go("back");
    cy.location("pathname").should("eq", "/home");
  });
});
