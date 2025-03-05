class DrugPreference {

    yeselement='#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
    NextElement='.preference-wrapper > .button-wrapper > .mat-focus-indicator'
    //Noelement='#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'

    clickYesbutton(){
         cy.get(this.yeselement, { timeout: 50000 }) .click({ force: true }); // Click forcefully if necessary
     }
     Clicknextbtn(){
        cy.get(this.NextElement).click()
     }
    //clickNobutton(){
     // cy.get(this.Noelement).click()
     //}

}
export default DrugPreference