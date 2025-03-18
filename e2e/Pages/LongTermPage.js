class LongTermPage {
    indicatorarrowele='.mat-expansion-indicator'
    subele=':nth-child(5) > .mat-focus-indicator'
    backele='.button-wrapper > :nth-child(1)'
    generatepdfele='.button-wrapper > .ng-star-inserted'

    clickDownArrow(){
        cy.get(this.indicatorarrowele).click()
    }
    clickSubmitBtn(){
        cy.get(this.subele).click()
    }
    clickBackIcon(){
        cy.get(this.backele).click()
    }
    clickGeneratePdf(){
        cy.get(this.generatepdfele).click()
    }

}
export default LongTermPage