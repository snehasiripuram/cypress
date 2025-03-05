
class PharmacyPage{
    zipcodebtn='#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
    addressbtn='#mat-radio-15 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
    zipele='#mat-input-13'
    Ziphistoryarrow='.mat-select-arrow'
    addressEle='#mat-input-14'
    zipfindphramacyelement=':nth-child(4) > .mat-focus-indicator > .mat-button-wrapper'
    AddressfindpharmacyELe='.form-field-container-col2 > :nth-child(3) > .mat-focus-indicator'
    distanceele='#mat-input-12'
    AddressphramcynameEle='#mat-input-11'
    //Zipcodepharamcyele='#mat-input-15'
    selecttheziphistoryele='#mat-option-21 > .mat-option-text'
    nextpageBtnEle=':nth-child(2) > .paginator-wrapper > .mat-paginator > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next'
    lastpageBtnEle=':nth-child(2) > .paginator-wrapper > .mat-paginator > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-last'
    periviouspageBtnEle='.mat-paginator-navigation-previous'
    firstpageBtnEle='body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > mat-sidenav-container:nth-child(1) > mat-sidenav-content:nth-child(5) > app-pharmacy:nth-child(3) > div:nth-child(3) > app-pharmacy-list:nth-child(1) > div:nth-child(2) > div:nth-child(2) > mat-paginator:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2) > span:nth-child(1) > svg:nth-child(1)'
    pharmacycheckBoxEle='#mat-checkbox-106 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    secondpharmacyCheckEle='#mat-checkbox-107 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    googlemapRadioBtnEle='app-pharmacy-card:nth-child(2) div:nth-child(1) mat-card:nth-child(1) mat-card-header:nth-child(1) div:nth-child(1) mat-card-title:nth-child(1) div:nth-child(1) div:nth-child(3) span:nth-child(1) mat-icon:nth-child(1)'
    itemperPageEle=':nth-child(2) > .paginator-wrapper > .mat-paginator > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-page-size'
    nextbtnEle='.selected-pharmacy > .button-wrapper'
    backbtnEle='.button-wrapper > .mat-focus-indicator'
    //pharmacycheckEle='#mat-checkbox-93 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    zipcoderadiocheckele='input[type=radio][value=1]'
    pickpharmacyfromadddressEle='#mat-checkbox-121 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    choosepharmacyaddresele='#mat-checkbox-130 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    checkpharmacyagainfromaddressele='#mat-checkbox-154 > .mat-checkbox-layout > .mat-checkbox-inner-container'

    clickZipcoderadio(){
        cy.get(this.zipcodebtn).click({force:true})
    }
    enterZipcode(zip){
        cy.get(this.zipele).clear().type(zip)
    }
    clickAddressradio(){
        cy.get(this.addressbtn).click({force:true})
    }
    clickZiphistoryarrow(){
        cy.get(this.Ziphistoryarrow).click()
    }
    enterAddress(address){
        cy.get(this.addressEle,{ timeout: 10000 }).type(address)
    }
    clickFindPahramcyinzipcode(){
        cy.get(this.zipfindphramacyelement).click()
    }
    clickAddressFindPhramacy(){
        cy.get(this.AddressfindpharmacyELe,{ timeout: 10000 }).click()
    }
    enterDistance(miles){
        cy.get(this.distanceele).clear().type(miles)
    }
    enterPharmacyname(nameofpharmacy){
        cy.get(this.AddressphramcynameEle).type(nameofpharmacy)
    }
    clickNextpageBtn(){
        cy.get(this.nextpageBtnEle).click({ multiple: true })
    }
    clickLastPageBtn(){
        cy.get(this.lastpageBtnEle).click({ multiple: true })
    }
    clickPerivousPageBtn(){
        cy.get(this.periviouspageBtnEle).click({ multiple: true})
    }
    clickFirstPageBtn(){
        cy.get(this.firstpageBtnEle).scrollIntoView().click({force: true})
    }
    selectPharmacy(){
        cy.get(this.pharmacycheckBoxEle).click()
    }
    selectSecondPharmacy(){
        cy.get(this.secondpharmacyCheckEle).click()
    }
    clickGoogleBtn(){
        cy.get(this.googlemapRadioBtnEle).click()
    }
    itemPerPage(){
        cy.get(this.itemperPageEle).should('exist');
    }
    enterZipcodePharmacy(Pname){
        cy.get(this.Zipcodepharamcyele).clear().type(Pname)
    }
    //clickPharmacyagain(){
     //   cy.get(this.pharmacycheckEle).click()
    //}
    //checkZipRadio(){
     //   cy.get(this.zipcoderadiocheckele).check({force:true})
    //}
    clickNextBtn(){
        cy.get(this.nextbtnEle).click({force:true})
    }
    clickBackBtn(){
        cy.get(this.backbtnEle).click()
    }
    selectZiphistoryZipcode(){
        cy.get(this.selecttheziphistoryele).click()
    }
    pickPharmacyfromAddress(){
        cy.get(this.pickpharmacyfromadddressEle).click()
    }
    choosePharmacyaddress(){
        cy.get(this.choosepharmacyaddresele).click()
    }
    checkPharmacyagaininaddress(){
        cy.get(this.checkpharmacyagainfromaddressele).click()
    }



}
export default PharmacyPage