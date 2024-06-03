//function that uses the section name text with the common 'a' attribute to expand the section
//if button to expand includes 'left' atribut (expanded)
//will click on the section (sectionName)
function getCategoriesGroup(sectionName) {
  //use sectionName to be used in a wrap to do more action over the element
  cy.contains("a", sectionName).then((section) => {
    cy.wrap(section)
      //finds the expamded button that is in the class expand-state and the second child g
      .find(".expand-state g g")
      //invokes the attribute data-name inside the expanded state
      .invoke("attr", "data-name")
      .then((attr) => {
        //if the attribute of the element includes left
        if (attr.includes("left")) {
          cy.wrap(section).click();
        }
      });
  });
}

export class LeftMenu {
  //Forms section
  formsFormLayouts() {
    getCategoriesGroup("Forms");
    cy.contains("Form Layouts").click();
  }
  formsDatepicker() {
    getCategoriesGroup("Forms");
    cy.contains("Datepicker").click();
  }

  modalOverlaysToastr() {
    getCategoriesGroup("Modal & Overlays");
    cy.contains("Toastr").click();
  }
  extraComponents() {
    getCategoriesGroup("Extra Components");
    cy.contains("Calendar").click();
  }
  charts() {
    getCategoriesGroup("Tables & Data");
    cy.contains("Smart Table").click();
  }
  tablesData() {
    getCategoriesGroup("Auth");
    cy.contains("Login").click();
  }
}

export const navigateTo = new LeftMenu();
