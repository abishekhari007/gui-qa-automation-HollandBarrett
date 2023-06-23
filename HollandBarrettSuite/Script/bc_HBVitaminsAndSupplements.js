/**
Business Component - bc_HBVitaminsAndSupplements
Author - Abishek Hari
**/

function fNavigateToVitaminCPageFromVitaminsAndSupplementsPage(){
  Log.Message("START BUSINESS COMPONENT - fNavigateToVitaminCPageFromVitaminsAndSupplementsPage");
  var vitaminsSupplements = Aliases.browser.pageHollandBarrettUkSLeadingHeal.sectionMenopauseHub.navMenopauseHub;
  vitaminsSupplements.linkVitaminsSupplements.panelVitaminsSupplements.HoverMouse();
  Delay(1000);
  vitaminsSupplements.textnodeVitaminsSupplements.panelVitaminC.Click();
  Delay(5000);
  aqObject.CheckProperty(Aliases.browser.pageVitaminCTabletsSupplementsSh.textnodeVitaminC, "contentText", cmpEqual, "Vitamin C");
  Log.Message("END BUSINESS COMPONENT - fNavigateToVitaminCPageFromVitaminsAndSupplementsPage");
}

function fSelectATabletAndAddToBasket(tabletName){
  Log.Message("END BUSINESS COMPONENT - fSelectATabletAndAddToBasket");
  var browserObj = Sys.Browser();
  var pageObj = browserObj.Page("*");
  var tabletsPath = pageObj.FindElement("//a[@aria-label='"+tabletName+"']/parent::div/div/div/button[text()='Add to Basket']");
  Delay(1000);
  tabletsPath.Click();
  Delay(3000, "Wait to add item to basket")
  Log.Message("END BUSINESS COMPONENT - fSelectATabletAndAddToBasket")
}
module.exports.fNavigateToVitaminCPageFromVitaminsAndSupplementsPage = fNavigateToVitaminCPageFromVitaminsAndSupplementsPage;
module.exports.fSelectATabletAndAddToBasket = fSelectATabletAndAddToBasket;