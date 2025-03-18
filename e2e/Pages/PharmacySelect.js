class PharmacySelect{

    zipcodeele='#mat-input-13'
    findPharmacyele=':nth-child(4) > .mat-focus-indicator'
    distanceele='#mat-input-12'
    select1stPharmacyele='#mat-checkbox-26 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    secondPharmacyele='#mat-checkbox-27 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    nextBtnele='.selected-pharmacy > .button-wrapper'


    enterZipcode(zip){
        cy.get(this.zipcodeele).type(zip)
    }
    enterDistance(miles){
        cy.get(this.distanceele).clear().type(miles)
    }
    clickFindPharmacy(){
        cy.get(this.findPharmacyele).click()
    }
    clickSelect1stPharmacy(){
        cy.get(this.select1stPharmacyele).click({ force: true })
    }
    clickSecondPharmacy(){
        cy.get(this.secondPharmacyele).click()
    }
    clickNextbtn(){
        cy.get(this.nextBtnele).click()
    }

}
export default PharmacySelect