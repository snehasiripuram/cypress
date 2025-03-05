class LoginPage{

    usernameEle='#mat-input-0';
    passwordEle='#mat-input-1';
    loginEle='.mat-button-wrapper';

    enterUsername(username){
        cy.get(this.usernameEle).type(username);
     }
     enterPassword(password){
        cy.get(this.passwordEle).type(password);
     }
     clickLoginbtn(){
        cy.get(this.loginEle).click();
     }

}
export default LoginPage;