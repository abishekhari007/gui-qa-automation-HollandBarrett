Feature: HollandBarretTestScenarios.feature

  Scenario: Test Case 1
    Given I navigate to the application
    Then I click Create Account icon available under accounts module
    Then I create a new account by giving all the required data
    Then I verify if the account has been created successfully
    
  Scenario: Test Case 2
    Given I navigate to the application
    Then I login into application with right username and password
    Then I verify successfull login
    Then I navigate to Vitamin C from Vitamin and supplement tab
    Then I add a Vitamin C tablet "Holland & Barrett Vitamin C 1000mg 120 Tablets" to the basket
    Then I navigate to Vegan Sports Nutrition from Sports Nutrition tab
    Then I add "USN 100% Plant Protein Chocolate 900g" to the basket
    Then I verify all the products are added to the basket "Holland & Barrett Vitamin C 1000mg 120 Tablets" and "USN 100% Plant Protein Chocolate 900g"
    Then I clear the basket for regression purpose "Holland & Barrett Vitamin C 1000mg 120 Tablets" and "USN 100% Plant Protein Chocolate 900g"
    Then I signout of application
    
   Scenario: Test Case 3
    Given I navigate to the application
    Then I login into application with right username and password
    Then I verify successfull login
    Then I navigate to Vitamin C from Vitamin and supplement tab
    Then I add a Vitamin C tablet "Holland & Barrett Vitamin C 1000mg 120 Tablets" and "Holland & Barrett Vitamin C 1000mg 240 Tablets" to the basket
    Then I navigate to Vegan Sports Nutrition from Sports Nutrition tab
    Then I add "USN 100% Plant Protein Chocolate 900g", "USN Diet Fuel Vegan Meal Replacement Shake Strawberry 880g" and "Applied Nutrition Clear Vegan Protein Strawberry & Raspberry 300g" to the basket
    Then I verify all the products are added to the basket "Holland & Barrett Vitamin C 1000mg 120 Tablets", "Holland & Barrett Vitamin C 1000mg 240 Tablets" and "USN 100% Plant Protein Chocolate 900g", "USN Diet Fuel Vegan Meal Replacement Shake Strawberry 880g" and "Applied Nutrition Clear Vegan Protein Strawberry & Raspberry 300g"
    Then I calculate the cost for the added items in the basket "Holland & Barrett Vitamin C 1000mg 120 Tablets", "Holland & Barrett Vitamin C 1000mg 240 Tablets" and "USN 100% Plant Protein Chocolate 900g", "USN Diet Fuel Vegan Meal Replacement Shake Strawberry 880g" and "Applied Nutrition Clear Vegan Protein Strawberry & Raspberry 300g"
    Then I clear the basket for regression purpose "Holland & Barrett Vitamin C 1000mg 120 Tablets", "Holland & Barrett Vitamin C 1000mg 240 Tablets" and "USN 100% Plant Protein Chocolate 900g", "USN Diet Fuel Vegan Meal Replacement Shake Strawberry 880g" and "Applied Nutrition Clear Vegan Protein Strawberry & Raspberry 300g"
    Then I signout of application