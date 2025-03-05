class ProfilePage {

    recommndEmail='#mat-input-3'
    healthArrow='#mat-select-2 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow'
    besthealth='#mat-option-4 > .mat-option-text'
    recommndName='#mat-input-4'
    lifeExpentency='#mat-input-5'
    dateFinder='.mat-datepicker-toggle > .mat-focus-indicator'
    year=':nth-child(6) > [data-mat-col="1"]'
    month='.mat-calendar-body-active'
    genderArrow='#mat-select-4 > .mat-select-trigger > .mat-select-arrow-wrapper'
    gender='#mat-option-10 > .mat-option-text'
    taxfilling='#mat-radio-8 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
    zipCode='#mat-input-8'
    search='.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon'
    magitierarrow='#mat-select-10 > .mat-select-trigger > .mat-select-arrow-wrapper'
    magitier='#mat-option-12 > .mat-option-text'
    next='.form-wrapper > .mat-raised-button > .mat-button-wrapper'
    
    
    EnterEmail(email){
        cy.get(this.recommndEmail).type(email)
    }
    ClickhealthArrow(){
        cy.get(this.healthArrow).click()
    }
    ClickBestHealth(){
        cy.get(this.besthealth).click()
    }
    EnterName(name){
        cy.get(this.recommndName).type(name)
    }
    EnterLifeExpentency(number){
        cy.get(this.lifeExpentency).clear().type(number)
    }
    ClickDateFinder(){
        cy.get(this.dateFinder).click()
    }
    ClickYear(){
        cy.get(this.year).click()
    }
    ClickMonth(){
        cy.get(this.month).click()
    }
    ClickGenderArrow(){
        cy.get(this.genderArrow).click()
    }
    ClickGender(){
        cy.get(this.gender).click()
    }
    ClickTaxFilling(){
        cy.get(this.taxfilling).click({ force: true })
    }
    EnterZipcode(Zipnumber){
        cy.get(this.zipCode).type(Zipnumber)
    }
    ClickSearch(){
        cy.get(this.search).click()
    }
    ClickMagiTierArrow(){
        cy.get(this.magitierarrow).click()
    }
    ClickMagiTier(){
        cy.get(this.magitier).click()
    }
    ClickNext(){
        cy.get(this.next).click()
    }
    
    
    }
    export default ProfilePage