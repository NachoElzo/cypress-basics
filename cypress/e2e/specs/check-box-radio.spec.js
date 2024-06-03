/// <reference types="cypress" />
import { navigateTo } from "../pages/left-menu.page.js";
import { formsSection } from "../pages/web-elements.page.js";
import { checkElement } from "../pages/check-box-radio.page.js";

describe("The user will check radio button and checkboxes from the grid modal", () => {
  beforeEach("navigate to the home page", () => {
    cy.visit("/");
  });

  it("Navigate to using grid and interact with the checkboxes", () => {
    navigateTo.formsFormLayouts();
    formsSection.usingTheGrid();
    checkElement.checkRadio();
  });
  it("Navigate to using modalOverlays and interact with the radioButtons in Toastr section", () => {
    navigateTo.formsFormLayouts();
    navigateTo.modalOverlaysToastr();
    checkElement.checkBoxes();
  });
});
