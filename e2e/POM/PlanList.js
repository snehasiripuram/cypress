class PlanList{

mat
    humanagoldele='#mat-checkbox-37 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    aarpele='#mat-checkbox-38 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    donebtnele='.button-container > .mat-focus-indicator'


    checkHumanagold(){
        cy.get(this.humanagoldele).click()
    }
    checkAARPplan(){
        cy.get(this.aarpele).click()
    }
    clickDonebtn(){
        cy.get(this.donebtnele).click()
    }

}
export default PlanList