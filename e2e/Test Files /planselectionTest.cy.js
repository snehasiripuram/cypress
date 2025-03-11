
import LoginPage from "../POM/LoginPage";
import Landingpage from "../POM/LandingPage";
import ProfilePage from "../POM/ProfilePage";
import DrugPreference from "../POM/DrugPreference";
import DrugSelect from "../POM/DrugSelect";
import PharmacySelect from "../POM/PharmacySelect";


describe("Planselection",() =>{
    it('Test1',() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page')
        const login= new LoginPage()
        login.enterUsername('valli@gmail.com')
        login.enterPassword('sri')
        login.clickLoginbtn()
        const landingpage= new Landingpage()
        cy.wait(1000)
        landingpage.clickRecommendation()
        const Ppage= new ProfilePage()
        Ppage.EnterEmail('siri21@gmail.com')
        cy.wait(1000)
        Ppage.ClickhealthArrow()
        Ppage.ClickBestHealth()
        Ppage.EnterName('sneha')
        Ppage.EnterLifeExpentency('85')
        Ppage.ClickDateFinder()
        Ppage.ClickYear()
        Ppage.ClickMonth()
        Ppage.ClickGenderArrow()
        Ppage.ClickGender()
        cy.wait(1000)
        Ppage.ClickTaxFilling()
        Ppage.EnterZipcode(80924)
        Ppage.ClickSearch()
        Ppage.ClickMagiTierArrow()
        Ppage.ClickMagiTier()
        cy.wait(1000)
        Ppage.ClickNext()
        const drugpreference= new DrugPreference
        drugpreference.clickYesbutton()
        cy.wait(1000)
        drugpreference.Clicknextbtn()
        const drugselect= new DrugSelect
        drugselect.clickBrowsedrug()
        cy.wait(1000)
        drugselect.clickSelectletter('B')
        cy.wait(1000)
        drugselect.clickSelectb()
        cy.wait(1000)
        drugselect.clickDrug()
        cy.wait(1000)   
        drugselect.clickAdddrug()
        cy.wait(1000)
        drugselect.clickBranddrug()
        cy.wait(1000)
        drugselect.clickAddtodruglist()
        cy.wait(1000)
        drugselect.clickDoneaddingdrug()
        const ph= new PharmacySelect
        ph.enterZipcode(80924)
        cy.wait(1000)
        ph.enterDistance(5)
        cy.wait(1000)
        ph.clickFindPharmacy()
        cy.wait(1000)
        ph.clickSelect1stPharmacy()
        cy.wait(1000)
        ph.clickSecondPharmacy()
        cy.wait(1000)
        ph.clickNextbtn()
        cy.wait(1000)
        





















})  
    })
