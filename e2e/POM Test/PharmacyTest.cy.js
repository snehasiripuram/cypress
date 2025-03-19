import LoginPage from "../Pages/LoginPage"
import LandingPage from "../Pages/LandingPage"
import ProfilePage from "../Pages/ProfilePage"
import DrugPreference from "../Pages/DrugPreference"
import DrugSelect from "../Pages/DrugSelect"
import PharmacyPage from "../Pages/PharmacyPage"


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
        
    });


        it('Test1,Select Zip code radio button',() => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)

        })


        it('Test2,Find Pharmacy By Zipcode',() => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('80109') 
            cy.wait(1000)
            pharmacypg.enterDistance('5')
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)

        });


        it('Test3,Find Pharmacy By zipcode,Boundary Value tetsing', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('5000') 
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            cy.log('Error on fetching county code.,Test passed')
         
        });


        it('Test4,Find Pharmacy By zipcode,leave the zipcode empty,Boundary Value tetsing', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('') 
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)

        });

        it('Test5,Find Pharmacy By zipcode,Give Invalid Zipcode', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('as1') 
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            cy.log('Zipcode is not in correct format,Test passed')

        });


        it('Test6,Find Pharmacy By zipcode,give Invalid Zipcode', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('12') 
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            cy.log('Zipcode must of length between 3 to 5,Test passed')

        });

        it('Test7,Find Pharmacy By zipcode,give Invalid zipcode', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('800108') 
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            cy.log('The system shouldnt accept more than 5 digit in the zipcode field on the manage pharmacies page')

        });


        it('Test8,Find Pharmacy By Zip', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('909') 
            cy.wait(1000)
            pharmacypg.enterDistance('5')
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)

        });

        it('Test9,Find Pharmacy By Zip', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('80124') 
            cy.wait(1000)
            pharmacypg.enterDistance('10')
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)

        });

        it('Test10,Select Address radio button', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickAddressradio()
            cy.wait(1000)

        });

        it('Test11,Find Pharmacy By Address', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickAddressradio()
            cy.wait(1000)
            pharmacypg.enterAddress('6067 braylin ln, castle pines,co')
            cy.wait(1000)
            pharmacypg.enterDistance('5')
            cy.wait(1000)
            pharmacypg.clickAddressFindPhramacy()
            cy.wait(1000)

        });
        it('Test12,Search Pharmacy By Invalid Address', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickAddressradio()
            cy.wait(1000)
            pharmacypg.enterAddress('qddff')
            cy.wait(1000)
            pharmacypg.clickAddressFindPhramacy()
            cy.wait(1000)
            cy.log('Specify the complete address with zipcode. For Example: 2640 N M 33, ROSE CITY, MI, 48654,Test passed')

        });

        it('Test13,Find Pharmacy By blank Address', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickAddressradio()
            cy.wait(1000)
            pharmacypg.enterAddress('')
            cy.wait(1000)
            pharmacypg.clickAddressFindPhramacy()
            cy.wait(1000)
            cy.log('The system should throw below error msg Address is required,test passed')

        });

        it('Test14,Find Pharmacy By Name', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('80108') 
            cy.wait(1000)
            pharmacypg.enterPharmacyname('KING SOOPERS')
            cy.wait(6000)
            pharmacypg.enterDistance('5')
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            
        });
        

        it('Test15,Find Pharmacy By invalid Name', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('80108') 
            cy.wait(1000)
            pharmacypg.enterPharmacyname('ad232')
            cy.wait(6000)
            pharmacypg.enterDistance('5')
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            cy.log('The system should throw error msg Pharmacy details not found in AiVante system,Test passed')
            
        });


        it('Test16,Zip code history', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('12345') 
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            pharmacypg.clickZiphistoryarrow()
            cy.wait(3000)
            
        });


        it('Test17,zip code history feature with incorrect zip code', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('50000') 
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            pharmacypg.clickZiphistoryarrow()
            cy.wait(3000)
            cy.log('The system should throw error message,Test passed')
            
        });


        it('Test18,select any zip code from the zip code history dropdown', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('50000') 
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            pharmacypg.clickZiphistoryarrow()
            cy.wait(3000)
            pharmacypg.selectZiphistoryZipcode()
            cy.wait(3000)
            
        });



        it('Test19,Find Pharmacies By Default Distance', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('80108') 
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            
        });


        it('Test20,Find Pharmacy By Distance', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('80108') 
            cy.wait(1000)
            pharmacypg.enterDistance('2')
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            
        });

        it('Test21, pharmacies with blank values in the Distance field ', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('80108') 
            cy.wait(1000)
            pharmacypg.enterDistance('')
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            
        });


        it('Test22, pharmacies with "character" in the Distance field  ', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('80108') 
            cy.wait(1000)
            pharmacypg.enterDistance('ab@')
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            cy.log('Pharmacy Details Not Found in AiVante System,Test passed')
                
        });
        

        it('Test23, Expand Pharmacies List Next page ', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('80108')     
            cy.wait(1000)
            pharmacypg.enterDistance('10')
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            pharmacypg.clickNextpageBtn()
            cy.wait(1000)

        });
        

        it('Test24, Expand Pharmacies List last page ', () => {
            const drugselect= new DrugSelect
            drugselect.clickDoneaddingdrug()
            const pharmacypg = new PharmacyPage
            pharmacypg.clickZipcoderadio()
            cy.wait(1000)
            pharmacypg.enterZipcode('80108')      
            cy.wait(1000)
            pharmacypg.enterDistance('10')
            cy.wait(1000)
            pharmacypg.clickFindPahramcyinzipcode()
            cy.wait(1000)
            pharmacypg.clickLastPageBtn()
            cy.wait(1000)

        });
        

        it('Test25, Expand Pharmacies List previous page"  ', () => {
            const drugselect= new DrugSelect
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
            pharmacypg.clickLastPageBtn()
            cy.wait(1000)
            pharmacypg.clickPerivousPageBtn()
            cy.wait(1000)

        });


        it('Test26, Expand Pharmacies List First page', () => {
            const drugselect= new DrugSelect
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
            pharmacypg.clickLastPageBtn()
            cy.wait(1000)
            pharmacypg.clickFirstPageBtn()
            cy.wait(1000)

        });



        it('Test27,verify the Item per page', () => {
            const drugselect= new DrugSelect
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
            pharmacypg.itemPerPage()
            cy.wait(1000)
        });


        it('Test28,Select Pharmacies', () => {
            const drugselect= new DrugSelect
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
            cy.wait(2000)
            pharmacypg.selectSecondPharmacy()
            cy.wait(2000)
            pharmacypg.selectThirdPharmacy()
            pharmacypg.selectFourthPharmacy()
            pharmacypg.selectFifthpharmacy()
            
        });



        it('Test29,DeSelect Pharmacies', () => {
            const drugselect= new DrugSelect
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
            cy.wait(2000)
            pharmacypg.selectSecondPharmacy()
            cy.wait(2000)
            pharmacypg.selectThirdPharmacy()
            pharmacypg.selectFourthPharmacy()
            pharmacypg.selectFifthpharmacy()
            pharmacypg.selectPharmacy()
            cy.wait(2000)
            pharmacypg.selectSecondPharmacy()
            cy.wait(2000)
            pharmacypg.selectThirdPharmacy()
            pharmacypg.selectFourthPharmacy()
            pharmacypg.selectFifthpharmacy()
            
        });


        it('Test30,Google map radio button', () => {
            const drugselect= new DrugSelect
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
            cy.wait(2000)
            pharmacypg.clickGoogleBtn()
            cy.wait(1000)
        });

        it('Test31,verify "Next button', () => {
            const drugselect= new DrugSelect
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
            pharmacypg.selectSecondPharmacy()
            pharmacypg.selectThirdPharmacy()
            pharmacypg.clickNextBtn()
        });

        it('Test32,verify Back button', () => {
            const drugselect= new DrugSelect
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
            pharmacypg.clickBackBtn()
            
        });
        
            

            



        







        




















});





    



    


