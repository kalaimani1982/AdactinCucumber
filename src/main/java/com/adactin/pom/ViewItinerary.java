package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ViewItinerary {
	public static WebDriver driver;
	
	@FindBy(xpath = "//input[@id='my_itinerary']")
	private WebElement myItinerary;
	
	@FindBy (xpath = "//input[@id='logout']")
	private WebElement logout;

	public ViewItinerary(WebDriver ldriver) {
		this.driver = ldriver;
		PageFactory.initElements(driver, this);
	}

	public WebElement getMyItinerary() {
		return myItinerary;
	}

	public WebElement getLogout() {
		return logout;
	}

	
}
