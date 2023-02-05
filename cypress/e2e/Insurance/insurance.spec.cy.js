import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";


Given('I successfully browse to the Application', () => {
    cy.visit('https://www.aplan.co.uk/')
    cy.url().should('include', 'aplan')
    cy.get("a[title='Go To Homepage']").should('be.visible')
    cy.get('#onetrust-accept-btn-handler').click()
})

When('I click on Get a quote button', () => {
    cy.get('.three > :nth-child(1) > .product-tile > .button-container > .button-wrap > .green').click()
})

Then('I should be able seen tell me more about yourself form', () => {
    cy.contains(' Tell us more about yourself...').should('be.visible')
})

When('I am on the filling page', () => {
    cy.visit("https://www.aplan.co.uk/common-pages/get-a-quote?root=1109&page=1130")
    cy.url().should('include', 'aplan')
})

Then('I should be able to fill the form', () => {

    cy.get('#Title').select('Mr')
    cy.wait(8)
    cy.get('#FirstName').type("George")
    cy.wait(10)
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#LastName').type("Kaseri")
    cy.wait(10)
    cy.get('#Postcode').type("bd94dr")
    cy.wait(8)
    cy.get('#Phone').type("07903839359")
    cy.wait(8)
    cy.get('#Email').type("georgekaseri2@gmail.com")
    cy.wait(8)
    cy.get('.green').click()
})

When('I am on the Thank you for contacting us page', () => {
    cy.visit('https://www.aplan.co.uk/common-pages/thank-you-page/?type=Get+a+quote&int=&pcode=CARI&ccode=&root=1109')

    cy.url().should('include', 'CARI&ccode=&root=1109')
    
    let expName = "Thank you for contacting us";

        cy.get("div[class='content-wrapper-2 thankyou'] div h2").then ((x) => {

            let actName=x.text()
            
            expect(actName).to.equal(expName) 
        })
})

Then('I should be able click on the Return to Home page',()=>{
    cy.get('.grey').click()
    cy.get("#onetrust-accept-btn-handler").click()
})







