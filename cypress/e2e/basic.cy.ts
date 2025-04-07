// desribe() is used to group tests together (describe the test suite)
describe("tasks page", () => {
  it("should display the title", () => {
    // visit() is used to navigate to the page
    cy.visit("http://localhost:3000/todo-tasks");
    // get() is used to select the element
    // contains() is used to check if the element contains the text
    cy.get("#todo-list-title").contains("Todo List");
    // should() is used to assert the element is present
    cy.get("#todo-list-title").should("exist");
    // find() is used to find the element within the parent element
    cy.get("[data-testid=todo-list-form]").should("exist").find("input");
  });
  //cypress test run in isolation, so we need to visit the page again
  it("should add a new todo", () => {
    cy.visit("http://localhost:3000/todo-tasks");
    // type() is used to type in the input
    cy.get("#todo-list-input").type("New Todo");
    // Check that the todo doesn't exist yet
    cy.contains("New Todo").should("not.exist");
    cy.get('[data-testid="todo-list-add-button"]').click();
    // Check that the todo exists
    cy.contains("New Todo").should("exist");
  });
  it("should filter todos", () => {
    cy.visit("http://localhost:3000/todo-tasks");
    cy.get("#todo-list-input").type("New Todo");
    cy.get('[data-testid="todo-list-add-button"]').click();
    cy.contains("New Todo").should("exist");
    cy.get('[data-testid="todo-list-filter-dropdown"]').click();
    cy.get('[data-testid="filter-active"]').click();
  });
});
