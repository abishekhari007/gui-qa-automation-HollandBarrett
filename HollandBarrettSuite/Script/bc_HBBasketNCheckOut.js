﻿/**
Business Component - bc_HBBasketNCheckOut
Author - Abishek Hari
**/

function fNavigateToBasket(){
  Log.Message("START BUSINESS COMPONENT - fNavigateToBasket");
  Aliases.browser.pageSportsNutritionProteinSupple.linkBasket.Click();
  Log.Message("END BUSINESS COMPONENT - fNavigateToBasket");
}

function fVerifyItemsAddedToBasket(tabletName){
  Log.Message("START BUSINESS COMPONENT - fVerifyItemsAddedToBasket");
  var browserObj = Sys.Browser();
  var pageObj = browserObj.Page("*");
  var tabletsPath = pageObj.FindElement("//h3[text()='"+tabletName+"']");
  if(tabletsPath.Exists == true){
    Log.Checkpoint("Added Item "+tabletName+" available in the basket");
  }
  else{
    Log.Error("Added Item "+tabletName+" not available in the basket");
  }
  Log.Message("END BUSINESS COMPONENT - fVerifyItemsAddedToBasket");
}

function fRemoveItemsFromBasket(tabletName){
  Log.Message("START BUSINESS COMPONENT - fRemoveItemsFromBasket");
  var browserObj = Sys.Browser();
  var pageObj = browserObj.Page("*");
  var tabletsPath = pageObj.FindElement("//h3[text()='"+tabletName+"']/parent::a/parent::div/parent::div/parent::div/parent::article/div[3]/div[2]/div[2]//div[@data-test='product-remove']/button");
  Delay(5000, "Wait for the remove to complete");
  tabletsPath.Click();
  Log.Message("END BUSINESS COMPONENT - fRemoveItemsFromBasket");
}

function fGetCostOfTheAddedItems(tabletName){
  Log.Message("START BUSINESS COMPONENT - fGetCostOfTheAddedItems");
  var browserObj = Sys.Browser();
  var pageObj = browserObj.Page("*");
  var tabletsPath = pageObj.FindElement("//h3[text()='"+tabletName+"']/parent::a/parent::div/parent::div/parent::div/parent::article/div[3]/div[1]/div[2]/div/div/div[contains(@class, 'product__price-now')]");
  var costOfItem = tabletsPath.contentText;
  costOfItem = aqString.SubString(costOfItem, 1, 10);
  costOfItem = parseFloat(costOfItem);
  return costOfItem;
  Log.Message("END BUSINESS COMPONENT - fGetCostOfTheAddedItems");
}

function fVerifyTotalCost(calculatedCost){
  Log.Message("START BUSINESS COMPONENT - fVerifyTotalCost");
  var browserObj = Sys.Browser();
  var pageObj = browserObj.Page("*");
  var tabletsPath = pageObj.FindElement("//h2[text()='Order summary']/parent::div/div[2]/div[@data-test='price-total']/div[2]");
  var totalCost = tabletsPath.contentText;
  Log.Message("TOTAL COST OF ADDED ITEMS "+totalCost);
  if(aqString.Find(totalCost, calculatedCost) >= 0){
    Log.Checkpoint("Calculated cost matches with the cost in the basket");
  }
  else{
    Log.Error("Calculated cost mismatches with the cost in the basket");
  }
  Log.Message("END BUSINESS COMPONENT - fVerifyTotalCost");
}

module.exports.fNavigateToBasket = fNavigateToBasket;
module.exports.fVerifyItemsAddedToBasket = fVerifyItemsAddedToBasket;
module.exports.fRemoveItemsFromBasket = fRemoveItemsFromBasket;
module.exports.fGetCostOfTheAddedItems = fGetCostOfTheAddedItems;
module.exports.fVerifyTotalCost = fVerifyTotalCost;