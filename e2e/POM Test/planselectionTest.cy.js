
import LoginPage from "../Pages/LoginPage";
import Landingpage from "../Pages/LandingPage";
import ProfilePage from "../Pages/ProfilePage";
import DrugPreference from "../Pages/DrugPreference";
import DrugSelect from "../Pages/DrugSelect";
import PharmacySelect from "../Pages/PharmacySelect";
import PdpPlanSelection from "../Pages/PdpPlanSelection";


describe("Planselection",() =>{
    it('Test1',() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login')
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
    
        const PdpPs = new PdpPlanSelection()
        PdpPs.clickPdpBtn()
        cy.wait(1000)
        PdpPs.clickFilterplanBtn()
        cy.wait(1000)
        PdpPs.clickInsuranceCarrierArrow()
        cy.wait(1000)
        PdpPs.selectAtenaPlanfrominsurancefilter()
        cy.wait(1000)
        PdpPs.checkSilverscriptplan()
        cy.wait(3000)
        PdpPs.checkSilverscriptplan()
        cy.wait(3000)
        PdpPs.clickResetBtn()
        cy.wait(1000)
        PdpPs.clickStarRatingFilter()
        cy.wait(1000)
        PdpPs.selectStarRating()
        cy.wait(1000)
        PdpPs.checkPlanfromstarrating()
        cy.wait(1000)
        PdpPs.clickDrugCoverage()
        cy.wait(1000)
        PdpPs.SelectDrugCoveragefromfilter()
        cy.wait(1000)
        PdpPs.verifyLocationSelector('Location:colorado')
        cy.wait(1000)
       






    })


   
        
























})  

