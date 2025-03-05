class MedicareAdvantagePage {


    expansionindicator='.mat-expansion-indicator'
    submitele=':nth-child(5) > .mat-focus-indicator'
    backbtnele='.button-wrapper > :nth-child(1)'

    clickExpansionArrow(){
        cy.get(this.expansionindicator).click()
    }
    clickSubmit(){
        cy.get(this.submitele).click()
    }
    clickBackbtn(){
        cy.get(this.backbtnele).click()
    }

}
export default MedicareAdvantagePage