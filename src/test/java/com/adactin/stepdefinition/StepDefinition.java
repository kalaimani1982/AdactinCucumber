package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.BaseClass;
import com.adactin.helper.ConfigurationReader;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.BookAhotel;
import com.adactin.pom.HomePageLogin;
import com.adactin.pom.SearchHotel;
import com.adactin.pom.SelectHotel;
import com.adactin.pom.ViewItinerary;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import junit.textui.TestRunner;

public class StepDefinition extends BaseClass{
	
	public static WebDriver driver = com.adactin.runner.TestRunner.driver;
	PageObjectManager pom = new PageObjectManager(driver);
	/*
	 * SearchHotel sh = new SearchHotel(driver); SelectHotel slt = new
	 * SelectHotel(driver); BookAhotel bh = new BookAhotel(driver); ViewItinerary
	 * vit = new ViewItinerary(driver);
	 */
	@Before
	public void beforeHooks(Scenario scenario) {
		String name = scenario.getName();
		System.out.println("Scenarios : "+ name);
		
	}
	@After
	public void afterHooks(Scenario scenario)  {
		String status = scenario.getStatus();
		System.out.println( "  Scenario Staus :   "+ status);
		if(scenario.isFailed()) {
			takesScreenShot(scenario.getName());
		}
		

	}
	//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Scenario 1 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	
	@Given("^: User launches the application$")
	public void user_launches_the_application() throws Throwable {
		//driver = getBrowser("Chrome");
	   // getUrl("http://adactinhotelapp.com/index.php");
		/*
		 * ConfigurationReader cr = new ConfigurationReader(); String url = cr.getUrl();
		 * getUrl(url);
		 */
		String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		getUrl(url);
	   
	}
	
	/*
	 * @When("^User enters the valid username in the Username field$") public void
	 * user_enters_the_valid_username_in_the_Username_field() throws Throwable {
	 * HomePageLogin hp = new HomePageLogin(driver);
	 * InputToWebelement(hp.getUsername(), "kalaimani1982");
	 * clickOnWebElement(hp.getLogin()); }
	 * 
	 * @When("^users enters the valid password in the password field$") public void
	 * users_enters_the_valid_password_in_the_password_field() throws Throwable {
	 * HomePageLogin hp = new HomePageLogin(driver);
	 * InputToWebelement(hp.getPassword(), "123456");
	 * 
	 * }
	 */
	@When("^User enters the valid \"([^\"]*)\" in the  username field$")
	public void user_enters_the_valid_in_the_username_field(String username) throws Throwable {
		InputToWebelement(pom.getHp().getUsername(), username);
	}

	@When("^users enters the valid \"([^\"]*)\" in the password field$")
	public void users_enters_the_valid_in_the_password_field(String password) throws Throwable {
		InputToWebelement(pom.getHp().getPassword(), password);
		
	}


	
	@When("^User clicks on the login Button$")
	public void user_clicks_on_the_login_Button() throws Throwable {
		clickOnWebElement(pom.getHp().getLogin());	    
	   
	}

	@Then("^verify the User is being navigated from Homepage to Search Hotel Page$")
	public void verify_the_User_is_being_navigated_from_Homepage_to_Search_Hotel_Page() throws Throwable {
		String title = driver.getTitle();
		if (title.equalsIgnoreCase("Adactin.com - Search Hotel")){
			System.out.println("Title = " + title);
		}
	   
	}
	
	//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Scenario 2 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

	@When("^User selects a location from the Select Location dropdown menu$")
	public void user_selects_a_location_from_the_Select_Location_dropdown_menu() throws Throwable {
		
	    dropDown(pom.getSeh().getLocation(), "London", "text");
	   
	}

	@When("^User selects a Hotel from the Select Hotel dropdown menu$")
	public void user_selects_a_Hotel_from_the_Select_Hotel_dropdown_menu() throws Throwable {
		dropDown(pom.getSeh().getHotel(), "Hotel Creek", "text");
	    
	   
	}

	@When("^User selects a Room Type from the Select Room Type dropdown menu$")
	public void user_selects_a_Room_Type_from_the_Select_Room_Type_dropdown_menu() throws Throwable {
		dropDown(pom.getSeh().getRoomType(), "Standard", "text");
	    
	   
	}

	@When("^User selects a number of rooms from the dropdown menu next to 'No of Rooms label'$")
	public void user_selects_a_number_of_rooms_from_the_dropdown_menu_next_to_No_of_Rooms_label() throws Throwable {
	    dropDown(pom.getSeh().getRoomNos(), "1 - One", "text");
	   
	}

	@When("^User enters a valid Check-in date in the ' Check In Date'field in \\(dd/mm/yyyy\\) format$")
	public void user_enters_a_valid_Check_in_date_in_the_Check_In_Date_field_in_dd_mm_yyyy_format() throws Throwable {
		InputToWebelement(pom.getSeh().getCheckInDate(),"22/01/2021");
	    
	   
	}

	@When("^User enters a valid Check-out in the 'Check Out Date' field in \\(dd/mm/yyyy\\) format$")
	public void user_enters_a_valid_Check_out_in_the_Check_Out_Date_field_in_dd_mm_yyyy_format() throws Throwable {
		InputToWebelement(pom.getSeh().getCheckOutDate(), "26/01/2021");
	    
	   
	}

	@When("^User enters total number of adults occupants$")
	public void user_enters_total_number_of_adults_occupants() throws Throwable {
		
		dropDown(pom.getSeh().getMaxAdults(), "1 - One", "text");
	    
	   
	}

	@When("^User enters total number of child occupants$")
	public void user_enters_total_number_of_child_occupants() throws Throwable {
		dropDown(pom.getSeh().getMaxChildrens(), "0 - None", "text");
	    
	   
	}

	@When("^User clicks the search button$")
	public void user_clicks_the_search_button() throws Throwable {
		clickOnWebElement(pom.getSeh().getSubmit());
		
	    
	   
	}

	@Then("^verify User is being navigated to Select Hotel page$")
	public void verify_User_is_being_navigated_to_Select_Hotel_page() throws Throwable {
		String title = driver.getTitle();
		if (title.equalsIgnoreCase("Adactin.com - Hotel")){
			System.out.println("Title = " + title);
		}
	   
	}
	
	//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Scenario 3 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

	@When("^User selects the desired Hotel based on Personel Preferences such as Room Type and Total price using the radio button$")
	public void user_selects_the_desired_Hotel_based_on_Personel_Preferences_such_as_Room_Type_and_Total_price_using_the_radio_button() throws Throwable {
	    
	   clickOnWebElement(pom.getSh().getSelectRadio());
	}

	@When("^Users clicks the continue button$")
	public void users_clicks_the_continue_button() throws Throwable {
		clickOnWebElement(pom.getSh().getClickContinue());
	    
	   
	}

	@Then("^Verify User is being Navigated to Book a Hotel page$")
	public void verify_User_is_being_Navigated_to_Book_a_Hotel_page() throws Throwable {
	    
	}

	//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Scenario 4 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	@When("^User enters the Firstname in Firstname field$")
	public void user_enters_the_Firstname_in_Firstname_field() throws Throwable {
		InputToWebelement(pom.getBh().getFirstname(), "kalai");
	    
	   
	}

	@When("^User enters the Lastname in Lastname field$")
	public void user_enters_the_Lastname_in_Lastname_field() throws Throwable {
	    InputToWebelement(pom.getBh().getLastname(),"mani");
	   
	}

	@When("^User enters the address to be billed$")
	public void user_enters_the_address_to_be_billed() throws Throwable {
		InputToWebelement(pom.getBh().getAddress(),"4 vivekandast, dubai");
	    
	   
	}

	@When("^User enters a valid (\\d+) digit credit card number$")
	public void user_enters_a_valid_digit_credit_card_number(int arg1) throws Throwable {
		InputToWebelement(pom.getBh().getCcNumber(), "1111222233334444");
	    
	   
	}

	@When("^User selects  the credit card type from the Select Credit card type dropdown box$")
	public void user_selects_the_credit_card_type_from_the_Select_Credit_card_type_dropdown_box() throws Throwable {
		dropDown(pom.getBh().getCcType(), "VISA", "text");
	    
	   
	}

	@When("^User selects the expiry Month of the credit card from Select month dropdown box$")
	public void user_selects_the_expiry_Month_of_the_credit_card_from_Select_month_dropdown_box() throws Throwable {
		dropDown(pom.getBh().getCcExpMonth(), "4", "value");
	    
	   
	}

	@When("^User selects the expiry year of the credit card from Select year dropdown box$")
	public void user_selects_the_expiry_year_of_the_credit_card_from_Select_year_dropdown_box() throws Throwable {
		dropDown(pom.getBh().getCcExpYear(), "2022", "value");
	    
	   
	}

	@When("^User enters the valid (\\d+) digit CVV number$")
	public void user_enters_the_valid_digit_CVV_number(int arg1) throws Throwable {
		InputToWebelement(pom.getBh().getCvv(), "999");
	    
	   
	}

	@When("^User clicks the Book now button$")
	public void user_clicks_the_Book_now_button() throws Throwable {
		clickOnWebElement(pom.getBh().getBookNow());
	    
	   
	}

	@Then("^verify User is being navigated to Booking confirmation page$")
	public void verify_User_is_being_navigated_to_Booking_confirmation_page() throws Throwable {
		String title = driver.getTitle();
		if (title.equalsIgnoreCase("Adactin.com -  Hotel")){
			System.out.println("Title = " + title);
		}
	}
	
	//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Scenario 5 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

	@When("^User clicks on  My Itinerary button to verify booking details$")
	public void user_clicks_on_My_Itinerary_button_to_verify_booking_details() throws Throwable {
		clickOnWebElement(pom.getVi().getMyItinerary());
		//waitForElement(vit.getMyItinerary());
		
		
	    
	   
	}

	@When("^User clicks on Logout button to exit the application$")
	public void user_clicks_on_Logout_button_to_exit_the_application() throws Throwable {
		clickOnWebElement(pom.getVi().getLogout());
	    
	   
	}

	@Then("^verify User is being navigated to LogOut page\\.$")
	public void verify_User_is_being_navigated_to_LogOut_page() throws Throwable {
		String title = driver.getTitle();
		if (title.equalsIgnoreCase(" Logout")){
			System.out.println("Title = " + title);
	   
	}
	}
}

