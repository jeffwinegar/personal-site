describe("app accessibility", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })
  it("has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("focuses on body link and asserts its attributes", () => {
    cy.findAllByRole("link", { name: /photographer/i })
      .first()
      .focus()
    cy.focused()
      .should("have.attr", "href", "https://www.instagram.com/jeff_winegar/")
      .should("not.have.css", "outline-width", "0px")
  })
})
