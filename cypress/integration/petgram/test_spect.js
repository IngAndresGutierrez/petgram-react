describe("Petgram", function () {
  it("para ver si funciona", function () {
    expect(true).to.equal(true);
  });

  it("navegar a categorias y ver fotos", function () {
    cy.visit("/pet/1");
    cy.get("article");
  });

  it("navegar con la navbar a la home", function () {
    cy.visit("/pet/1");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });

  it("los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs", function () {
    cy.visit("/favs");
    cy.get("form").should("have.length", 2);
  });
});
