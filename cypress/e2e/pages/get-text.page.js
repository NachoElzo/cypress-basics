export class GetText {
  //create a constant with the web element
  saveTextInVariable() {
    cy.contains("nb-card-header", "Form without labels").then((label) => {
      const labelText = label.text();
      expect(labelText).to.equal("Form without labels");
    });
  }

  //function trim deletes any blanck space that can be in the designated variable
  saveTextjqueryTextInvoque() {
    cy.contains("nb-card-header", "Form without labels")
      //invoke text as an object (web element)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("Form without labels");
      });
  }
  //you can use an alias to save the text and use it
  emailTextAs() {
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .as("emailPlaceHolderText");
    cy.get("@emailPlaceHolderText").should("contain", "Email address");
  }
}

export const getText = new GetText();
