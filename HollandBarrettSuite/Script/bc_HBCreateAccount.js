/**
Business Componenet - bc_HBCreateAccount
Author - Abishek Hari
**/

function fNavigateToCreateAAccountPage(){
  Log.Message("START BUSINESS COMPONENT - fNavigateToCreateAAccountPage");
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount.linkAccount.HoverMouse();
  Delay(2000);
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount.linkCreateAccount.Click();
  Log.Message("END BUSINESS COMPONENT - fNavigateToCreateAAccountPage");
}


function fFillFormToCreateAccount(firstname, lastname, email, password){
  Log.Message("START BUSINESS COMPONENT - fFillFormToCreateAccount");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageRegisterHollandBarrettTheUkS;
  let textbox = page.articleCreateAnAccount;
  let textbox2 = textbox.formFirstName;
  let textBoxFirstName = textbox2.fieldsetFirstName.textboxFirstName;
  textBoxFirstName.Click();
  textBoxFirstName.SetText(firstname);
  let textBoxLastName = page.articleCreateAnAccount2.formFirstName2.fieldsetFirstName2.textboxLastName;
  textBoxLastName.Click();
  textBoxLastName.SetText(lastname);
  let emailBox = textbox2.emailinputEmailAddress;
  emailBox.Click();
  emailBox.SetText(email);
  let passwordBox = textbox2.passwordboxCreateAPassword;
  passwordBox.Click();
  passwordBox.SetText(password);
  confirmPasswordBox = textbox2.passwordboxConfirmPassword;
  confirmPasswordBox.Click();
  confirmPasswordBox.SetText(password);
  textbox2.labelNotToday.textnodeNotTodaywhatIsRewardsFor.Click();
  textbox2.labelIAgreeToTheWebsite.textnodeIAgreeToTheWebsite.Click();
  textbox2.buttonCreateAnAccount.ClickButton();
  Log.Message("END BUSINESS COMPONENT - fFillFormToCreateAccount");
}

function fVerifySuccessfullAccountCreation(){
  Log.Message("START BUSINESS COMPONENT - fVerifySuccessfullAccountCreation");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageRegisterHollandBarrettTheUkS;
  let textbox = page.articleCreateAnAccount;
  Delay(5000);
  Log.Checkpoint(aqObject.GetPropertyValue(textbox.textnodeAccountCreated, "Enabled"));
  if(aqObject.GetPropertyValue(textbox.textnodeAccountCreated, "contentText") == "Account created"){
    aqObject.CheckProperty(textbox.textnodeAccountCreated, "contentText", cmpEqual, "Account created");
    Log.Checkpoint("Account created successfully");
  }
  else{
    Log.Checkpoint("Account Already Existed");
  }
  Log.Message("END BUSINESS COMPONENT - fVerifySuccessfullAccountCreation");
}

function fNavigateToSignInPage(){
  Log.Message("START BUSINESS COMPONENT - fNavigateToSignInPage");
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount.linkAccount.HoverMouse();
  Delay(2000);
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount.linkSignIn.Click();
  Log.Message("END BUSINESS COMPONENT - fNavigateToSignInPage");
}

function fLoginToApplication(username, password){
  Log.Message("START BUSINESS COMPONENT - fLoginToApplication");
  var formEmailAddress = Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress;
  var emailBox = formEmailAddress.textboxEmailAddress;
  emailBox.Click();
  emailBox.SetText(username);
  var passwordBox = formEmailAddress.passwordboxPassword;
  passwordBox.Click();
  passwordBox.SetText(password);
  var signinButton = formEmailAddress.buttonAction;
  signinButton.Click();
  Log.Message("END BUSINESS COMPONENT - fLoginToApplication");
}

function fVerifySuccessfullLogin(firstname){
  Log.Message("START BUSINESS COMPONENT - fVerifySuccessfullLogin");
  var signinUser = Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount.linkAccount.textnodeHelloTafname.contentText;
  Log.Message("Logged in as... "+signinUser);
  if(aqString.Find(signinUser, firstname) >= 0){
    Log.Checkpoint("Logged in with the correct user");
  }
  else{
    Log.Error("User incorrect");
  }
  Log.Message("START BUSINESS COMPONENT - fVerifySuccessfullLogin");
}

module.exports.fNavigateToCreateAAccountPage = fNavigateToCreateAAccountPage;
module.exports.fFillFormToCreateAccount = fFillFormToCreateAccount;
module.exports.fVerifySuccessfullAccountCreation = fVerifySuccessfullAccountCreation;
module.exports.fNavigateToSignInPage = fNavigateToSignInPage;
module.exports.fLoginToApplication = fLoginToApplication;
module.exports.fVerifySuccessfullLogin = fVerifySuccessfullLogin;

