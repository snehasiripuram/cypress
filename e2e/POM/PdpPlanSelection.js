class PdpPlanSelection {
    pdpelement='.selected-container > :nth-child(1) > .mat-focus-indicator'
    filterplanEle='[mattooltip="Filter Plan"]'
    insurancecarrierele='#mat-select-48 > .mat-select-trigger > .mat-select-arrow-wrapper'
    Atenamedicareplanfromfilterele='#mat-option-27 > .mat-option-text'
    selectsilverscriptplanele='.mat-checkbox-inner-container'
    starratingele='#mat-select-50 > .mat-select-trigger > .mat-select-arrow-wrapper'
    pickstarratingfromfilterEle='#mat-option-32 > .mat-option-text'
    selectplanfromstarratingele='#mat-checkbox-96 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    drugcoverageele='#mat-select-52 > .mat-select-trigger > .mat-select-arrow-wrapper'
    selectfromdrugcoveragefilterele='.mat-option-text'
    locationselectorele='.location'    //Assertion for location on PDP plan selection page 
    remaningyearele='span[_ngcontent-exd-c306]' //Assertion for remaning plan years 
    resetbuttonele='.mat-action-row > .mat-focus-indicator'
    fliterexpansionarrowele='.mat-expansion-indicator'
    sortplanele='.mat-icon'    //this is beside the filter option 
    sortplanarrowele='.mat-select-arrow'
    selectsortplanele='#mat-option-45 > .mat-option-text'
    selectwellcareplanele='#mat-checkbox-167 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    doneele='.button-container > .mat-focus-indicator'
    canclebtnele='.right-container > .mat-raised-button'
    

    clickPdpBtn(){
        cy.get(this.pdpelement).click()
    }
    clickFilterplanBtn(){
        cy.get(this.filterplanEle).click()
    }
    clickInsuranceCarrierArrow(){
        cy.get(this.insurancecarrierele).click()
    }
    selectAtenaPlanfrominsurancefilter(){
        cy.get(this.Atenamedicareplanfromfilterele).click()
    }
    checkSilverscriptplan(){
        cy.get(this.selectsilverscriptplanele).click()
    }
    clickStarRatingFilter(){
        cy.get(this.starratingele).click()
    }
    selectStarRating(){
        cy.get(this.pickstarratingfromfilterEle).click()
    }
    checkPlanfromstarrating(){
        cy.get(this.selectplanfromstarratingele).click()
    }
    clickDrugCoverage(){
        cy.get(this.drugcoverageele).click()
    }
    SelectDrugCoveragefromfilter(){
        cy.get(this. selectfromdrugcoveragefilterele).click()
    }
    verifyLocationSelector(expectedLocation){
        cy.get(this.locationselectorele).should('contain.text',expectedLocation)
    }
    verifyRemaningYears(expectedText){
        cy.get(this.remaningyearele).sholud('contain.text', expectedText)
    }
    clickResetBtn(){
        cy.get(this.resetbuttonele).click()
    }
    clickFliterexpansion(){
        cy.get(this.fliterexpansionarrowele).click()
    }
    clickSortPlan(){
        cy.get(this.sortplanele).click()
    }
    clickSortplanArrow(){
        cy.get(this.sortplanarrowele).click()
    }
    selectSortplan(){
    cy.get(this.selectsortplanele).click()
    }
    selectWellcarePlan(){
        cy.get(this.selectwellcareplanele).click()
    }
    clickDoneBtn(){
        cy.get(this.doneele).click()
    }
    clickCancleBtn(){
        cy.get(this.canclebtnele).click()
    }
}
export default PdpPlanSelection