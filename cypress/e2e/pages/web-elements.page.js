//3 differents method for finds elements
// get() --> find elements on the page globally by locator
// contains() --> find html text,  text values and locators (and you can mix themn)
// find() -->  find child elements by locator

export class FormLayouts {
  usingTheGrid() {
    //by tag name
    cy.get("input");
    //by id
    cy.get("#inputEmail1");
    //by class value
    cy.get(".input-full-width");
    // by attribute name
    cy.get("[fullwidth]");
    // by attribute and name
    cy.get("[placeholder='Email']");
    // by entire class value with more that one value
    cy.get(
      "[class='input-full-width size-medium status-basic shape-rectangle nb-transition']"
    );
    //by 2 atributes names
    cy.get("[placeholder='Email'][fullwidth]");
    //by tag, attribute id and class
    cy.get("input#inputEmail1.input-full-width[placeholder='Email']");
    //get a section 'Using the grid' that contains a button inside
    cy.contains("nb-card", "Using the Grid").find("button");
    //get a section that contains button with text
    cy.contains("nb-card", "Using the Grid").contains("Sign in");
    //navigating inside the object structure starting from the password textbox
    cy.get("#inputPassword2")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-radio")
      .contains("Option 1")
      .click();
  }

  //Since we dont use asyncronous methods to store web elements in a variable we use alias
  //as alias can also works in methods and can be used as global variable --> as
  aliasReusableLocators() {
    cy.contains("nb-card", "Basic form").as("basicFormSection");
    //call the alias with @
    cy.get("@basicFormSection")
      .find('input[placeholder="Email"]')
      .type("THIS IS A TEST")
      .clear();
    cy.get("@basicFormSection")
      .find('input[placeholder="Password"]')
      .type("THIS IS NOT A TEST")
      .clear();
  }

  //Wrap method to usea a locator with differents fuctions
  //.then returning jquery function that have to be used in the wrap function
  wrapReusableLocators() {
    cy.contains("nb-card", "Basic form").then((basicFormSection) => {
      cy.wrap(basicFormSection)
        .find('[for="exampleInputEmail1"]')
        .should("contain", "Email");
      cy.wrap(basicFormSection)
        .find('[for="exampleInputPassword1"]')
        .should("contain", "Password");
    });
  }
  //how to get attributes from web elements
  getAttributeValue() {
    cy.get('[for="exampleInputEmail1"]')
      .invoke("attr", "class")
      .then((classValue) => {
        expect(classValue).to.equal("label");
      });
  }
  //properties values can be found in the web debugger section properties
  //In this case the property value of the web element is the text that you pass in the test
  getAttributePropertyValue() {
    cy.get("#exampleInputEmail1")
      .type("testemail@test.com")
      .invoke("prop", "value")
      .should("contain", "testemail@test.com")
      .then((property) => {
        expect(property).to.equal("testemail@test.com");
      });
  }
}

export const formsSection = new FormLayouts();
