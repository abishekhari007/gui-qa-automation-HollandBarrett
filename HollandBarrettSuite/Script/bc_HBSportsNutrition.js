﻿/**
Business Component - bc_HBSportsNutrition
Author - Abishek Hari
**/

function fNavigateToVeganSportsNutritionPageFromSportsNutritionPage(){
  Log.Message("START BUSINESS COMPONENT - fNavigateToVeganSportsNutritionPageFromSportsNutritionPage");
  var sportsNutrition = Aliases.browser.pageSportsNutritionProteinSupple.navMenopauseHub.textnodeMenopauseHub.textnodeSportsNutrition;
  sportsNutrition.linkSportsNutrition.HoverMouse();
  Delay(1000);
  sportsNutrition.linkVeganSportsNutrition.Click();
  Delay(5000);
  Log.Message("END BUSINESS COMPONENT - fNavigateToVeganSportsNutritionPageFromSportsNutritionPage");
}

function fSelectATabletAndAddToBasket(tabletName){
  Log.Message("END BUSINESS COMPONENT - fSelectATabletAndAddToBasket");
  Delay(10000, "Wait for the page to load");
  var browserObj = Sys.Browser();
  var pageObj = browserObj.Page("*");
  var tabletsPath = pageObj.FindElement("//a[@aria-label='"+tabletName+"']/parent::div/div/div/button[text()='Add to Basket']");
  Delay(1000);
  tabletsPath.Click();
  Log.Message("END BUSINESS COMPONENT - fSelectATabletAndAddToBasket")
}

module.exports.fNavigateToVeganSportsNutritionPageFromSportsNutritionPage = fNavigateToVeganSportsNutritionPageFromSportsNutritionPage;
module.exports.fSelectATabletAndAddToBasket = fSelectATabletAndAddToBasket;