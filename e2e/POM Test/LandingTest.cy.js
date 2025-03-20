import LoginPage from "../Pages/LoginPage"
import LandingPage from "../Pages/LandingPage"

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
    });
});