class PlanSelectPage{

    medicareadvtgele=':nth-child(5) > .mat-focus-indicator'
    checkhumanagoldele='#mat-checkbox-49 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    medicarele='.fixed-bottom-1 > .button-container > :nth-child(1)'
    longtermele='.button-container > :nth-child(2)'
    aivanteimageele='img'

    clickMedicareadvt(){
        cy.get(this.medicareadvtgele).click()
    }
    clickHumanacheckbox(){
        cy.get(this.checkhumanagoldele).click()
    }
    clickMedicareBtn(){
        cy.get(this.medicarele).click()
    }
    clickLongterm(){
        cy.get(this.longtermele).click()
    }
    clickAivanteImage(){
        cy.get(this.aivanteimageele).click()
    }

}
export default PlanSelectPage