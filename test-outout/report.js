$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/vedant.jagani/Desktop/Salesforce/CucumberBDDFrameVedant/src/main/java/Features/PresentToManager.feature");
formatter.feature({
  "line": 1,
  "name": "Present to Manager",
  "description": "",
  "id": "present-to-manager",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Present to Manager functionality",
  "description": "",
  "id": "present-to-manager;present-to-manager-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "View the Salesforce website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Salesforce login page title as \"Login | Salesforce\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "SystemAdmin UserID enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Login to Sandbox button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Home page title as \"Home | Salesforce\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on the Gear icon",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "CLick Setup option",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#------------------------Login as receptionist-----------------------------------"
    }
  ],
  "line": 12,
  "name": "Find Users",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Search for receptionist Alize McDonald from CNC",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click the Crete New Up button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Populate the Create New Up fields",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "CLick on the Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click the Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Logout as receptionist",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#----------------------Login as Dealer Sale-------------------------------------"
    }
  ],
  "line": 21,
  "name": "Search for Dealer Sales David King from CNC",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "CLick on Customer Name",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on the RV Genius button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Populate the City and State fields",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on the Next Step button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Populate the Additional Attributes section",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Select the RVs by clicking plus sign",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on the Confirm Selections button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Select the Face icon and click on the Commitment button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "CLick the Check mark green icon",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "CLick on the Next Step",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click on the Present to Manager button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Take screenshot of the Successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Logout Dealer Sales",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#-------------------------Login as Dealer Sales Manager----------------------------------"
    }
  ],
  "line": 37,
  "name": "Search for the Dealer Sale Manager",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#Jazz Barrett"
    }
  ],
  "line": 39,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "# Then CLick on the Opportunity"
    }
  ],
  "line": 41,
  "name": "Logout as Jazz Barrett",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 42,
      "value": "#    And Close the Salesforce Application"
    }
  ],
  "line": 44,
  "name": "",
  "description": "",
  "id": "present-to-manager;present-to-manager-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 45,
      "id": "present-to-manager;present-to-manager-functionality;;1"
    },
    {
      "cells": [
        "vedant.jagani@campingworld.com.test",
        "Welcome2019*"
      ],
      "line": 46,
      "id": "present-to-manager;present-to-manager-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "Present to Manager functionality",
  "description": "",
  "id": "present-to-manager;present-to-manager-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "View the Salesforce website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Salesforce login page title as \"Login | Salesforce\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "SystemAdmin UserID enter \"vedant.jagani@campingworld.com.test\" and \"Welcome2019*\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Login to Sandbox button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Home page title as \"Home | Salesforce\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on the Gear icon",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "CLick Setup option",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#------------------------Login as receptionist-----------------------------------"
    }
  ],
  "line": 12,
  "name": "Find Users",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Search for receptionist Alize McDonald from CNC",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click the Crete New Up button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Populate the Create New Up fields",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "CLick on the Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click the Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Logout as receptionist",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#----------------------Login as Dealer Sale-------------------------------------"
    }
  ],
  "line": 21,
  "name": "Search for Dealer Sales David King from CNC",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "CLick on Customer Name",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on the RV Genius button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Populate the City and State fields",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on the Next Step button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Populate the Additional Attributes section",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Select the RVs by clicking plus sign",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on the Confirm Selections button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Select the Face icon and click on the Commitment button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "CLick the Check mark green icon",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "CLick on the Next Step",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click on the Present to Manager button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Take screenshot of the Successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Logout Dealer Sales",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#-------------------------Login as Dealer Sales Manager----------------------------------"
    }
  ],
  "line": 37,
  "name": "Search for the Dealer Sale Manager",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#Jazz Barrett"
    }
  ],
  "line": 39,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "# Then CLick on the Opportunity"
    }
  ],
  "line": 41,
  "name": "Logout as Jazz Barrett",
  "keyword": "Then "
});
formatter.match({
  "location": "PresentToManagerStepDefi.view_the_Salesforce_website()"
});
formatter.result({
  "duration": 10245197280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login | Salesforce",
      "offset": 32
    }
  ],
  "location": "PresentToManagerStepDefi.salesforce_login_page_title_as(String)"
});
formatter.result({
  "duration": 3010843576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vedant.jagani@campingworld.com.test",
      "offset": 26
    },
    {
      "val": "Welcome2019*",
      "offset": 68
    }
  ],
  "location": "PresentToManagerStepDefi.systemadmin_UserID_enter_and(String,String)"
});
formatter.result({
  "duration": 60881860,
  "status": "passed"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_Login_to_Sandbox_button()"
});
formatter.result({
  "duration": 19872897193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home | Salesforce",
      "offset": 20
    }
  ],
  "location": "PresentToManagerStepDefi.home_page_title_as(String)"
});
formatter.result({
  "duration": 18008264117,
  "status": "passed"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_the_Gear_icon()"
});
formatter.result({
  "duration": 18339385232,
  "status": "passed"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_Setup_option()"
});
formatter.result({
  "duration": 99159253044,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //parent::div[@class\u003d\u0027slds-m-horizontal_xxx-small slds-size--1-of-6 slds-truncate\u0027]//button[@type\u003d\u0027button\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027HQ-991-0L7LVCF\u0027, ip: \u00272601:246:4500:c40:f8df:3af5:fe02:bf3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 84.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201207203640, moz:geckodriverVersion: 0.28.0, moz:headless: false, moz:processID: 20097, moz:profile: /var/folders/s3/88ktkygs3s3..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 18.7.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6c7bd065-1014-f84e-ab54-5cfc95c91c30\n*** Element info: {Using\u003dxpath, value\u003d//parent::div[@class\u003d\u0027slds-m-horizontal_xxx-small slds-size--1-of-6 slds-truncate\u0027]//button[@type\u003d\u0027button\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat pages.BasePage.$(BasePage.java:56)\n\tat pages.PresentToManagerPage.createNewUpBtnClick(PresentToManagerPage.java:210)\n\tat pages.PresentToManagerPage.setupClick(PresentToManagerPage.java:124)\n\tat stepDefinitions2.PresentToManagerStepDefi.click_Setup_option(PresentToManagerStepDefi.java:85)\n\tat ✽.And CLick Setup option(/Users/vedant.jagani/Desktop/Salesforce/CucumberBDDFrameVedant/src/main/java/Features/PresentToManager.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "PresentToManagerStepDefi.find_Users()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.search_for_receptionist_Alize_McDonald_from_CNC()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_the_Crete_New_Up_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.populate_the_Create_New_Up_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_the_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OpportunitiesStepDef.click_the_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.logout_as_receptionist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.search_for_Dealer_Sales_David_King_from_CNC()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_Customer_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_the_RV_Genius_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.populate_the_City_and_State_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_the_Next_Step_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.populate_the_Notes_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.select_the_RVs_by_clicking_plus_sign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_the_Confirm_Selections_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.select_the_Face_icon_and_click_on_the_Commitment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_the_Check_mark_green_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_the_Next_Step()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_the_Present_to_Manager_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.take_screenshot_of_the_Successfully_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.logout_Dealer_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.search_for_the_Dealer_Sale_Manager()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.click_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PresentToManagerStepDefi.logout_as_Jazz_Barrett()"
});
formatter.result({
  "status": "skipped"
});
});