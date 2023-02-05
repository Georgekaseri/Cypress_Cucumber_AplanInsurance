Feature: Get Quote functions of the Application

  As a user I am enable to use all the functions in Get a Quote page
    
    Scenario Outline: As a user, I should see the title of the Page
    Given I successfully browse to the Application
    When I click on Get a quote button
    Then I should be able seen tell me more about yourself form
   

   Scenario Outline: As a user, I should able to fill the Get a quote form
   When I am on the filling page 
   Then I should be able to fill the form

   Scenario Outline: As a user, I should see the request sumitted message
   When I am on the Thank you for contacting us page
   Then I should be able click on the Return to Home page
   

   


   
   



