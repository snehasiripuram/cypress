import LoginPage from "../Pages/Login"
import LandingPage from "../Pages/LandingPage"
import ProfilePage from "../Pages/ProfilePage"
import DrugPreference from "../Pages/DrugPreference"
import DrugSelect from "../Pages/DrugSelect"
import PharmacyPage from "../Pages/PharmacyPage"
import PdpPlanSelection from "../Pages/PdpPlanSelectionPage"


describe('PharmacyTest', () => {

    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login');

        cy.fixture('LoginFixture').then((data) => {
            const login= new LoginPage
            login.enterUsername(data.username)
            login.enterPassword(data.password)
            login.clickLoginbtn()
       });

       const recPage = new LandingPage();
       recPage.clickRecommedation();
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
        Ppage.EnterZipcode(80109)
        Ppage.ClickSearch()
        cy.wait(1000)
        Ppage.ClickMagiTierArrow()
        cy.wait(1000)
        Ppage.ClickMagiTier()
        cy.wait(1000)
        Ppage.ClickNext()
        cy.wait(1000)
        const drugpreference= new DrugPreference
        drugpreference.clickYesbutton()
        cy.wait(1000)
        drugpreference.Clicknextbtn()
        cy.wait(1000)
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
        const pharmacypg = new PharmacyPage
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode('80108') 
        cy.wait(1000)
        pharmacypg.enterDistance('15')
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.selectPharmacy()
        pharmacypg.clickNextBtn()

    });



        it('Test1,verify the "PDP Button',() => {
            const PdpPs = new PdpPlanSelection
            PdpPs.clickPdpBtn()
            cy.wait(1000)

        });






});