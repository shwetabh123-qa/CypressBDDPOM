
const LoginElementLocators=require('../PageElements/LoginPageElements.json')

export class loginpageElements{

launchurl(url){

cy.visit(url)

}

username(user_name)

{

cy.get(LoginElementLocators.LoginPageLocators.username_txt).type(user_name)
return

}



password(pass_word){

    cy.get(LoginElementLocators.LoginPageLocators.password_txt).type(pass_word)
    return
}


login(){

    cy.get(LoginElementLocators.LoginPageLocators.login_txt).click()
    return
}



}