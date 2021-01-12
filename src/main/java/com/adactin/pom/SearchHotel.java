package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel {
	public static WebDriver driver;
	
	@FindBy(xpath = "//select[@id='location']")
	private WebElement location;
	
	@FindBy(xpath = "//select[@id='hotels']")
	private WebElement hotel;
	
	@FindBy(xpath = "//select[@id='room_type']")
	private WebElement roomType;
	
	@FindBy(xpath = "//select[@id='room_nos']")
	private WebElement roomNos;
	
	@FindBy(xpath = "(//input[@type=\"text\"])[2]")
	private WebElement checkInDate;
	
	@FindBy(xpath = "(//input[@type=\"text\"])[3]")
	private WebElement checkOutDate;
	
	@FindBy(xpath = "//select[@id='adult_room']")
	private WebElement maxAdults;
	
	@FindBy(xpath = "//select[@id='child_room']")
	private WebElement maxChildrens;
	
	@FindBy(xpath = "//input[@id='Submit']")
	private WebElement submit;

	public SearchHotel(WebDriver ldriver) {
		this.driver = ldriver;
		PageFactory.initElements(driver, this);
	}
		
	
	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotel() {
		return hotel;
	}

	public WebElement getRoomType() {
		return roomType;
	}

	public WebElement getRoomNos() {
		return roomNos;
	}

	public WebElement getCheckInDate() {
		return checkInDate;
	}

	public WebElement getCheckOutDate() {
		return checkOutDate;
	}

	public WebElement getMaxAdults() {
		return maxAdults;
	}

	public WebElement getMaxChildrens() {
		return maxChildrens;
	}

	public WebElement getSubmit() {
		return submit;
	}
	
	

}
