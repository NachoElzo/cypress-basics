// Function check works only with radio buttons and check boxes web elements as as attribute type 'checlbox' or 'radiobutton'

export class CheckElements {
  checkRadio() {
    // Inside the module using grid we fin type radio button and then we warp it to do some actions
    cy.contains("nb-card", "Using the Grid")
      .find("[type='radio']")
      .then((radioButtons) => {
        //with force true option we can click over hidden elements
        cy.wrap(radioButtons).eq(1).check({ force: true }).should("be.checked");
        //we change the selected radio to be the index 1 and indez 0 is not longer checked
        cy.wrap(radioButtons).eq(0).should("not.be.checked");
        //radio button index 2 is disabled by default
        cy.wrap(radioButtons).eq(2).should("be.disabled");
      });
  }
  checkBoxes() {
    //we are going to find 3 checkboxes in the section, cypres validates if the boxes are checked or not
    //and will perform if the object is uncheckeable and skip those  that are not
    cy.get("[type='checkbox']").uncheck({ force: true });
    cy.get("[type='checkbox']")
      .eq(0)
      .check({ force: true })
      .should("be.checked");
  }
}

export const checkElement = new CheckElements();
