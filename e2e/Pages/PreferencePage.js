class PreferencePage {

    backBut="div[class='button-container pad'] button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']";
    PreferencesYes = "#mat-radio-11 > .mat-radio-label";//Search preference Yes
    PreferencesNo="#mat-radio-12 > .mat-radio-label";//Search preference No
    nextBut = ".preference-wrapper > .button-wrapper > .mat-focus-indicator";
    
    clickBackBut(){
    cy.get(this.backBut).wait(2000).click();
    } 
    clickPreferencesYes() {
    cy.get(this.PreferencesYes).wait(2000).click();
    }
    clickPreferencesNo(){
    cy.get(this.PreferencesNo).click();
    }
    clickNext() {
    cy.get(this.nextBut).click();
    }
    
    }
    export default PreferencePage;