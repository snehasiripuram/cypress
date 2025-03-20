import LoginPage from "../Pages/LoginPage"
import LandingPage from "../Pages/LandingPage"
import HomePage from "../Pages/HomePage"
import PreferencePage from "../Pages/PreferencePage"
import PrescriptionPage from "../Pages/PrescriptionPage"


describe('PharmacyTest', () => {

    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login');

        cy.fixture('LoginFixture').then((data) => {
            const lPage = new LoginPage();
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); 
       });

       const recPage = new LandingPage();
       recPage.clickRecommedation();
       
       const homepage = new HomePage();
        
        homepage.enterEmail('siri21@gmail.com');
        cy.wait(100)
        homepage.clickhealthArrow();
        cy.wait(100)
        homepage.clickGoodHealth();
        cy.wait(1000)
        homepage.enterName('sneha');
        cy.wait(1000)
        homepage.enterLifeexpectancy('80');
        cy.wait(1000)
        homepage.datePickerclick();
        cy.wait(1000)
        homepage.year1957click();
        cy.wait(1000)
        homepage.month1957click();
        cy.wait(1000)
        homepage.enterZip('80109');
        cy.wait(1000)
        homepage.clickSearch();
        cy.wait(1000)
        homepage.nextHomeClick();
        cy.wait(1000)
        const preferencespage=new PreferencePage();
        preferencespage.clickPreferencesYes();
        cy.wait(1000);
        preferencespage.clickNext();
        cy.wait(1000);

        const drugPage = new PrescriptionPage();
        drugPage.enterDrug('BACTRIM')
        drugPage.clickBrand()
        drugPage.clickAddDrug()
        drugPage.clickDoneAddingDrug()

        
    });
});