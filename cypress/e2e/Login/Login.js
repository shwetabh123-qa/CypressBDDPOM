///<reference types="cypress"/>

import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import { loginpageElements } from "../../PageObjects/PageActions/LoginPageActions.js";

const Login_Elements=new loginpageElements

// describe ("POM",()=>

// {


//     it("Login Page",()=>{
        
        Given("I open the Orange HRM application",()=>{

            Login_Elements.launchurl('https://opensource-demo.orangehrmlive.com/')

        })


        When("I enter Admin as username",()=>{


            Login_Elements.username('Admin')
        })

        When("I enter admin123 as password",()=>{


            Login_Elements.password('admin1234')
        })

        Then("I click on the login button",()=>{


            Login_Elements.login()
            cy.screenshot()
        })
//     })   
        
// })