package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookAhotel {
	public static WebDriver driver;
	
	@FindBy(xpath = "//input[@id='first_name']")
	private WebElement firstname;
	
	@FindBy(xpath = "//input[@id='last_name']")
	private WebElement lastname;
	
	@FindBy(xpath = "//textarea[@id='address']")
	private WebElement address;
	
	@FindBy(xpath = "//input[@id='cc_num']")
	private WebElement ccNumber;
	
	@FindBy(xpath = "//select[@id='cc_type']")
	private WebElement ccType;
	
	@FindBy(xpath = "//select[@id='cc_exp_month']")
	private WebElement ccExpMonth;
	
	@FindBy(xpath = "//select[@id='cc_exp_year']")
	private WebElement ccExpYear;
	
	@FindBy(xpath = "//input[@id='cc_cvv']")
	private WebElement cvv;
	
	@FindBy(xpath = "//input[@id='book_now']")
	private WebElement bookNow;

	public BookAhotel(WebDriver ldriver) {
		this.driver = ldriver;
		PageFactory.initElements(driver, this);
		
	}

	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLastname() {
		return lastname;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCcNumber() {
		return ccNumber;
	}

	public WebElement getCcType() {
		return ccType;
	}

	public WebElement getCcExpMonth() {
		return ccExpMonth;
	}

	public WebElement getCcExpYear() {
		return ccExpYear;
	}

	public WebElement getCvv() {
		return cvv;
	}

	public WebElement getBookNow() {
		return bookNow;
	}

	
	

}
