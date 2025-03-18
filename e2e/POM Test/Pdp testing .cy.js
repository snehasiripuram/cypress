import LoginPage from "../POM/LoginPage"
import Landingpage from "../POM/LandingPage"
import ProfilePage from "../POM/ProfilePage"
import DrugPreference from "../POM/DrugPreference"
describe('PDP Automation',() => {
 it('test1',() =>{
    cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page')
    const login= new LoginPage
    const landingpg= new Landingpage
    const Ppage= new ProfilePage
    const drugpreference= new DrugPreference
    login.enterUsername('valli@gmail.com')
    login.enterPassword('sri')
    login.clickLoginbtn()
    cy.wait(1000)
    landingpg.clickRecommendation()
    Ppage.EnterEmail('siri21@gmail.com')
    cy.wait(1000)
    Ppage.ClickhealthArrow()
    Ppage.ClickBestHealth()
    Ppage.EnterName('sneha')
    cy.wait(1000)
    Ppage.EnterLifeExpentency('80')
    cy.wait(1000)
    Ppage.ClickDateFinder()
    cy.wait(1000)
    Ppage.ClickYear()
    cy.wait(1000)
    Ppage.ClickMonth()
    Ppage.ClickGenderArrow()
    Ppage.ClickGender()
    cy.wait(1000)
    Ppage.ClickTaxFilling()
    cy.wait(1000)
    Ppage.EnterZipcode(80924)
    Ppage.ClickSearch()
    cy.wait(1000)
    Ppage.ClickMagiTierArrow()
    cy.wait(1000)
    Ppage.ClickMagiTier()
    cy.wait(1000)
    Ppage.ClickNext()
    drugpreference.clickYesbutton()
    cy.wait(1000)
    drugpreference.Clicknextbtn()


 })


})