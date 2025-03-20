class PrescriptionPage {

txtDrugName = ".ng-tns-c108-29 > .ant-select-selection-search >";
brandDrug = (".marginLeft20pxImp > .ng-star-inserted");
addToMyDrugList = "button.ng-star-inserted > span";
doneAddingDrug = ".ng-star-inserted > .mat-focus-indicator";



enterDrug(drugName){
    cy.get(this.txtDrugName).type(drugName).wait(1000)
    cy.get(".ant-select-item-option-active > .ant-select-item-option-content").click();
}  
clickBrand(){ 
    cy.get(this.brandDrug).click().wait(1000);
}
clickAddDrug(){ 
    cy.get(this.addToMyDrugList).first().click().wait(1000);
}
clickDoneAddingDrug(){
    cy.get(this.doneAddingDrug).wait(1000).click() 
}




}
export  default PrescriptionPage
