package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.adactin.BaseClass;
import com.adactin.helper.ConfigurationReader;
import com.adactin.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src/test/java/com/adactin/feature", 
glue = "com\\adactin\\stepdefinition", 
plugin = {// "html:Reports/CucumberReport.html","json:Reports/Cucumber.json",
		 "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:Reports/CucumberExtentReport.html"},
//tags = {"@smokeTest"},
monochrome = true, 
dryRun = false,
strict = true


)

public class TestRunner {

	public static WebDriver driver;

	@BeforeClass

	public static void setUpMethod() throws Exception {
		/*
		 * ConfigurationReader cr = new ConfigurationReader(); String browserNme =
		 * cr.getBrowserName(); driver = BaseClass.getBrowser(browserNme);
		 */
		String browserName = FileReaderManager.getInstance().getCrInstance().getBrowserName();
		driver = BaseClass.getBrowser(browserName);
		

	}

	@AfterClass
	public static void tearDrop() {
		driver.close();
	}

}
