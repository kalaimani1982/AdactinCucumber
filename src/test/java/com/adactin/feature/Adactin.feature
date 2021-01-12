Feature: Hotel reservation using Adactin booking application 

@smokeTest
Scenario Outline:: Validate registered User login functionality in Adactin Application 
	Given : User launches the application 
	When User enters the valid "<username>" in the  username field 
	And users enters the valid "<password>" in the password field 
	And User clicks on the login Button 
	Then verify the User is being navigated from Homepage to Search Hotel Page 
	
Examples:
|username||password|
|aaa||111|
|bbb||222|
|kalaimani1982||123456|


	
	
Scenario: Verify User navigation to Search Hotel page 
	When User selects a location from the Select Location dropdown menu 
	And User selects a Hotel from the Select Hotel dropdown menu 
	And User selects a Room Type from the Select Room Type dropdown menu 
	And User selects a number of rooms from the dropdown menu next to 'No of Rooms label' 
	And User enters a valid Check-in date in the ' Check In Date'field in (dd/mm/yyyy) format 
	And User enters a valid Check-out in the 'Check Out Date' field in (dd/mm/yyyy) format 
	And User enters total number of adults occupants 
	And User enters total number of child occupants 
	And  User clicks the search button 
	Then verify User is being navigated to Select Hotel page 
	
Scenario: Verify User is being navigated to Select Hotel page 
	When User selects the desired Hotel based on Personel Preferences such as Room Type and Total price using the radio button 
	And Users clicks the continue button 
	Then Verify User is being Navigated to Book a Hotel page 
	
Scenario: Verify user is being navigated to Book a Hotel Page 
	When User enters the Firstname in Firstname field 
	And User enters the Lastname in Lastname field 
	And User enters the address to be billed 
	And User enters a valid 16 digit credit card number 
	And User selects  the credit card type from the Select Credit card type dropdown box 
	And User selects the expiry Month of the credit card from Select month dropdown box 
	And User selects the expiry year of the credit card from Select year dropdown box 
	And User enters the valid 3 digit CVV number 
	And User clicks the Book now button 
	Then verify User is being navigated to Booking confirmation page 
	
Scenario: Verify User being navigated to Booking Confirmation page 
	When User clicks on  My Itinerary button to verify booking details 
	And User clicks on Logout button to exit the application 
	Then verify User is being navigated to LogOut page. 
	
	
	
	
	
	