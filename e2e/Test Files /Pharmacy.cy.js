import LoginPage from "../POM/LoginPage"
import Landingpage from "../POM/LandingPage"
import ProfilePage from "../POM/ProfilePage"
import DrugPreference from "../POM/DrugPreference"
import DrugSelect from "../POM/DrugSelect"
import PharmacyPage from "../POM/PharmacyPage"



describe('PharmacyTest', () => {

    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login');

        cy.fixture('LoginFixture').then((data) => {
            const login= new LoginPage
            login.enterUsername(data.username)
            login.enterPassword(data.password)
            login.clickLoginbtn()
       });


        const landingpg= new Landingpage
        landingpg.clickRecommendation()
        const Ppage= new ProfilePage

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



    });











});





    



    


