﻿var bc_HBBasketNCheckOut = require("bc_HBBasketNCheckOut");
var bc_HBSportsNutrition = require("bc_HBSportsNutrition");
var bc_HBVitaminsAndSupplements = require("bc_HBVitaminsAndSupplements");
var bc_Common = require("bc_Common");
var bc_HBCreateAccount = require("bc_HBCreateAccount");

Given("I navigate to the application", function (){
  var applicationURL = "https://www.hollandandbarrett.com/";  
  bc_Common.fNavigateToApplication(applicationURL);
});

Then("I click Create Account icon available under accounts module", function (){
  bc_HBCreateAccount.fNavigateToCreateAAccountPage();
});

Then("I create a new account by giving all the required data", function (){
  var firstName = "TAFName";
  var lastName = "TALName";
  var email = "tafname.talname@testautomation.com";
  var password = "Test@1234";
  bc_HBCreateAccount.fFillFormToCreateAccount(firstName, lastName, email, password);
});

Then("I verify if the account has been created successfully", function (){
  bc_HBCreateAccount.fVerifySuccessfullAccountCreation();
  bc_Common.fCloseBrowserInstance();
});

Then("I login into application with right username and password", function (){
  var username = "tafname.talname@testautomation.com";
  var password = "Test@1234";
  bc_HBCreateAccount.fNavigateToSignInPage();
  bc_HBCreateAccount.fLoginToApplication(username, password)
});

Then("I verify successfull login", function (){
  var firstname = "TAFName";
  bc_HBCreateAccount.fVerifySuccessfullLogin(firstname);
});

Then("I navigate to Vitamin C from Vitamin and supplement tab", function (){
  bc_HBVitaminsAndSupplements.fNavigateToVitaminCPageFromVitaminsAndSupplementsPage();
});

Then("I add a Vitamin C tablet {arg} to the basket", function (tabletName){
  bc_HBVitaminsAndSupplements.fSelectATabletAndAddToBasket(tabletName);
});

Then("I navigate to Vegan Sports Nutrition from Sports Nutrition tab", function (){
  bc_HBSportsNutrition.fNavigateToVeganSportsNutritionPageFromSportsNutritionPage();
});

Then("I add {arg} to the basket", function (tabletName){
  bc_HBSportsNutrition.fSelectATabletAndAddToBasket(tabletName);
});

Then("I verify all the products are added to the basket {arg} and {arg}", function (tabletName1, tabletName2){
  bc_HBBasketNCheckOut.fNavigateToBasket();
  Delay(15000, "Waiting for the page to load");
  bc_HBBasketNCheckOut.fVerifyItemsAddedToBasket(tabletName1);
  bc_HBBasketNCheckOut.fVerifyItemsAddedToBasket(tabletName2)
});

Then("I clear the basket for regression purpose {arg} and {arg}", function (tabletName1, tabletName2){
  bc_HBBasketNCheckOut.fRemoveItemsFromBasket(tabletName1);
  bc_HBBasketNCheckOut.fRemoveItemsFromBasket(tabletName2);
});

Then("I signout of application", function (){
  bc_Common.fSignOut();
  bc_Common.fCloseBrowserInstance();
});

Then("I add a Vitamin C tablet {arg} and {arg} to the basket", function (tablet1, tablet2){
  bc_HBVitaminsAndSupplements.fSelectATabletAndAddToBasket(tablet1);
  bc_HBVitaminsAndSupplements.fSelectATabletAndAddToBasket(tablet2);
});

Then("I add {arg}, {arg} and {arg} to the basket", function (tablet1, tablet2, tablet3){
  bc_HBSportsNutrition.fSelectATabletAndAddToBasket(tablet1);
  bc_HBSportsNutrition.fSelectATabletAndAddToBasket(tablet2);
  bc_HBSportsNutrition.fSelectATabletAndAddToBasket(tablet3);
});

Then("I verify all the products are added to the basket {arg}, {arg} and {arg}, {arg} and {arg}", function (tablet1, tablet2, tablet3, tablet4, tablet5){
  bc_HBBasketNCheckOut.fNavigateToBasket();
  Delay(15000, "Waiting for the page to load");
  bc_HBBasketNCheckOut.fVerifyItemsAddedToBasket(tablet1);
  bc_HBBasketNCheckOut.fVerifyItemsAddedToBasket(tablet2);
  bc_HBBasketNCheckOut.fVerifyItemsAddedToBasket(tablet3);
  bc_HBBasketNCheckOut.fVerifyItemsAddedToBasket(tablet4);
  bc_HBBasketNCheckOut.fVerifyItemsAddedToBasket(tablet5);
});

Then("I clear the basket for regression purpose {arg}, {arg} and {arg}, {arg} and {arg}", function (tablet1, tablet2, tablet3, tablet4, tablet5){
  bc_HBBasketNCheckOut.fRemoveItemsFromBasket(tablet1);
  bc_HBBasketNCheckOut.fRemoveItemsFromBasket(tablet2);
  bc_HBBasketNCheckOut.fRemoveItemsFromBasket(tablet3);
  bc_HBBasketNCheckOut.fRemoveItemsFromBasket(tablet4);
  bc_HBBasketNCheckOut.fRemoveItemsFromBasket(tablet5);
});

Then("I calculate the cost for the added items in the basket {arg}, {arg} and {arg}, {arg} and {arg}", function (tablet1, tablet2, tablet3, tablet4, tablet5){
  var costOfItem1 = bc_HBBasketNCheckOut.fGetCostOfTheAddedItems(tablet1);
  var costOfItem2 = bc_HBBasketNCheckOut.fGetCostOfTheAddedItems(tablet2);
  var costOfItem3 = bc_HBBasketNCheckOut.fGetCostOfTheAddedItems(tablet3);
  var costOfItem4 = bc_HBBasketNCheckOut.fGetCostOfTheAddedItems(tablet4);
  var costOfItem5 = bc_HBBasketNCheckOut.fGetCostOfTheAddedItems(tablet5);
  Log.Message("Cost for "+tablet1+" calculated at 1 quantity "+costOfItem1);
  Log.Message("Cost for "+tablet2+" calculated at 1 quantity "+costOfItem2);
  Log.Message("Cost for "+tablet3+" calculated at 1 quantity "+costOfItem3);
  Log.Message("Cost for "+tablet4+" calculated at 1 quantity "+costOfItem4);
  Log.Message("Cost for "+tablet5+" calculated at 1 quantity "+costOfItem5);
  var totalCostOfItems = costOfItem1+costOfItem2+costOfItem3+costOfItem4+costOfItem5;
  totalCostOfItems = parseFloat(totalCostOfItems).toFixed(2)
  Log.Message("TOTAL COST OF ALL THE ITEMS "+totalCostOfItems);
  bc_HBBasketNCheckOut.fVerifyTotalCost(totalCostOfItems);
});
