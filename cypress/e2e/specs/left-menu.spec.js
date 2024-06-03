import { navigateTo } from "../pages/left-menu.page";
/// <reference types="cypress" />

describe("Left menu from the home page", () => {
  beforeEach("", () => {
    cy.visit("/");
  });
  it("Validates left menu from the Home page", () => {
    navigateTo.formsFormLayouts();
    navigateTo.formsDatepicker();
    navigateTo.modalOverlaysToastr();
    navigateTo.extraComponents();
    navigateTo.charts();
    navigateTo.tablesData();
  });
});
