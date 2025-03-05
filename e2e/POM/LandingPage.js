class Landingpage{

    recommndEle='.button-container > .mat-focus-indicator > .mat-button-wrapper'

    clickRecommendation(){
        cy.get(this.recommndEle , { timeout: 1000}).click();// extend timeout 
    }
}
export default Landingpage;