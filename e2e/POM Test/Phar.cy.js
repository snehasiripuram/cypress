
import LoginPage from "../Pages/LoginPage"
import Landingpage from "../Pages/LandingPage"
import ProfilePage from "../Pages/ProfilePage"
import DrugPreference from "../Pages/DrugPreference"
import DrugSelect from "../Pages/DrugSelect"
import PharmacyPage from "../Pages/PharmacyPage"
describe('PDP',() => {
    it('test1',() =>{
    cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page')
    const login= new LoginPage
    const landingpg= new Landingpage
    const Ppage= new ProfilePage
    const drugpreference= new DrugPreference
    login.enterUsername("testuser@gmail.com")
    login.enterPassword("user123")
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
    cy.wait(1000)
    pharmacypg.clickZipcoderadio() 
    cy.wait(1000)
    pharmacypg.enterZipcode('80922') 
    cy.wait(1000)
    pharmacypg.clickFindPahramcyinzipcode()
    cy.wait(1000)
    pharmacypg.enterZipcode('80924') 
    cy.wait(1000)
    pharmacypg.clickZiphistoryarrow()
    cy.wait(3000)
    pharmacypg.selectZiphistoryZipcode()
    cy.wait(3000)
    pharmacypg.clickFindPahramcyinzipcode()
    cy.wait(1000)
    pharmacypg.enterDistance('15')
    cy.wait(1000)
    pharmacypg.clickFindPahramcyinzipcode()
    cy.wait(2000)
    pharmacypg.clickNextpageBtn()
    cy.wait(1000)
    pharmacypg.clickLastPageBtn()
    cy.wait(1000)
    pharmacypg.clickPerivousPageBtn()
    cy.wait(1000)
    pharmacypg.clickFirstPageBtn()
    cy.wait(1000)
    pharmacypg.selectPharmacy()
    cy.wait(1000)
    pharmacypg.selectSecondPharmacy()
    cy.wait(1000)
    pharmacypg.itemPerPage()
    cy.wait(1000)
    pharmacypg.selectPharmacy()
    cy.wait(2000)
    pharmacypg.selectSecondPharmacy()
    cy.wait(2000)
    pharmacypg.clickAddressradio()
    cy.wait(1000)
    pharmacypg.enterAddress('6391 rollick drive,Colorado springs,CO,80924')
    cy.wait(6000)
    pharmacypg.clickAddressFindPhramacy()
    cy.wait(3000)
    pharmacypg.pickPharmacyfromAddress()
    cy.wait(2000)
    pharmacypg.pickPharmacyfromAddress()
    cy.wait(2000)
    pharmacypg.enterPharmacyname('WALGREENS')
    cy.wait(6000)
    pharmacypg.clickAddressFindPhramacy()
    cy.wait(1000)
    pharmacypg. choosePharmacyaddress()
    cy.wait(2000)
    pharmacypg.clickBackBtn()
    cy.wait(3000)
    drugselect.clickDoneaddingdrug()
    cy.wait(3000)
    pharmacypg.clickAddressFindPhramacy()
    cy.wait(1000)
    pharmacypg.checkPharmacyagaininaddress()
    cy.wait(1000)
    pharmacypg.clickGoogleBtn()
    cy.wait(1000)
    pharmacypg.clickNextBtn()
    
    })       
})
    
