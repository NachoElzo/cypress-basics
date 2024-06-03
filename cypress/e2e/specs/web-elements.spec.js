/// <reference types="cypress" />
import { navigateTo } from "../pages/left-menu.page.js";
import { formsSection } from "../pages/web-elements.page.js";
import { getText } from "../pages/get-text.page.js";

describe("This spec file handles differents types of web elements", () => {
  beforeEach("Navigates to the home page", () => {
    cy.visit("/");
  });
  it.only("Get elements from the form layout section", () => {
    navigateTo.formsFormLayouts();
    formsSection.usingTheGrid();
    formsSection.aliasReusableLocators();
    formsSection.wrapReusableLocators();
    formsSection.getAttributeValue();
    formsSection.getAttributePropertyValue();
  });
  it("Get text from web elements", () => {
    navigateTo.formsFormLayouts();
    getText.saveTextInVariable();
    getText.saveTextjqueryTextInvoque();
    getText.emailTextAs();
  });
});
