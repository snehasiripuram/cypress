class DrugSelect{

    browseDrugele=':nth-child(1) > .login-form-forgot > u'
    selectLetterele='.ant-select-selection-item'
    selectdrug='.ant-drawer-body > :nth-child(9)'
    selectBele='.ant-select-item-option-content'
    adddrugele='.ant-drawer-footer > div.ng-star-inserted > :nth-child(2) > .ng-star-inserted'
    addbrandele='.ageRatedScrollPopup > .marginLeft20pxImp > .ng-star-inserted'
    addtodrugele='.marginTop2Percent > .ng-star-inserted'
    doneadddrug='.ng-star-inserted > .mat-focus-indicator'

    clickBrowsedrug(){
        cy.get(this.browseDrugele).click()
    }
    clickSelectletter(letter){
        cy.get(this.selectLetterele,{timeout: 1000}).type(letter)
    }
    clickSelectb(){
        cy.get(this.selectBele).click()
    }
    clickDrug(){
        cy.get(this.selectdrug).click()
    }
    clickBranddrug(){
        cy.get(this.addbrandele).click()
    }
    clickAdddrug(){
        cy.get(this.adddrugele).click()
    }
    clickAddtodruglist(){
        cy.get(this.addtodrugele).click()
    }
    clickDoneaddingdrug(){
        cy.get(this.doneadddrug).click({force:true})
    }

}
export default DrugSelect