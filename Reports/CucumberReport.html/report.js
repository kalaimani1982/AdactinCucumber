$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel reservation using Adactin booking application",
  "description": "",
  "id": "hotel-reservation-using-adactin-booking-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": Validate registered User login functionality in Adactin Application",
  "description": "",
  "id": "hotel-reservation-using-adactin-booking-application;:-validate-registered-user-login-functionality-in-adactin-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": ": User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid \"\u003cusername\u003e\" in the  username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "users enters the valid \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the User is being navigated from Homepage to Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "hotel-reservation-using-adactin-booking-application;:-validate-registered-user-login-functionality-in-adactin-application;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 12,
      "id": "hotel-reservation-using-adactin-booking-application;:-validate-registered-user-login-functionality-in-adactin-application;;1"
    },
    {
      "cells": [
        "aaa",
        "",
        "111"
      ],
      "line": 13,
      "id": "hotel-reservation-using-adactin-booking-application;:-validate-registered-user-login-functionality-in-adactin-application;;2"
    },
    {
      "cells": [
        "bbb",
        "",
        "222"
      ],
      "line": 14,
      "id": "hotel-reservation-using-adactin-booking-application;:-validate-registered-user-login-functionality-in-adactin-application;;3"
    },
    {
      "cells": [
        "kalaimani1982",
        "",
        "123456"
      ],
      "line": 15,
      "id": "hotel-reservation-using-adactin-booking-application;:-validate-registered-user-login-functionality-in-adactin-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1637800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": ": Validate registered User login functionality in Adactin Application",
  "description": "",
  "id": "hotel-reservation-using-adactin-booking-application;:-validate-registered-user-login-functionality-in-adactin-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": ": User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid \"aaa\" in the  username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "users enters the valid \"111\" in the password field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the User is being navigated from Homepage to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 10310627700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 215072100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 24
    }
  ],
  "location": "StepDefinition.users_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 131711100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_Button()"
});
formatter.result({
  "duration": 532310400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_the_User_is_being_navigated_from_Homepage_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 16804900,
  "status": "passed"
});
formatter.after({
  "duration": 491700,
  "status": "passed"
});
formatter.before({
  "duration": 229900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": ": Validate registered User login functionality in Adactin Application",
  "description": "",
  "id": "hotel-reservation-using-adactin-booking-application;:-validate-registered-user-login-functionality-in-adactin-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": ": User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid \"bbb\" in the  username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "users enters the valid \"222\" in the password field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the User is being navigated from Homepage to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 411568200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bbb",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 137613500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 24
    }
  ],
  "location": "StepDefinition.users_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 128255900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_Button()"
});
formatter.result({
  "duration": 630076800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_the_User_is_being_navigated_from_Homepage_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 9472300,
  "status": "passed"
});
formatter.after({
  "duration": 241200,
  "status": "passed"
});
formatter.before({
  "duration": 175800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": ": Validate registered User login functionality in Adactin Application",
  "description": "",
  "id": "hotel-reservation-using-adactin-booking-application;:-validate-registered-user-login-functionality-in-adactin-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": ": User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid \"kalaimani1982\" in the  username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "users enters the valid \"123456\" in the password field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the User is being navigated from Homepage to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 467215200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kalaimani1982",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 150360900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 24
    }
  ],
  "location": "StepDefinition.users_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 152176500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_Button()"
});
formatter.result({
  "duration": 2810472300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_the_User_is_being_navigated_from_Homepage_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 11160900,
  "status": "passed"
});
formatter.after({
  "duration": 120800,
  "status": "passed"
});
formatter.before({
  "duration": 127900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify User navigation to Search Hotel page",
  "description": "",
  "id": "hotel-reservation-using-adactin-booking-application;verify-user-navigation-to-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User selects a location from the Select Location dropdown menu",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User selects a Hotel from the Select Hotel dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User selects a Room Type from the Select Room Type dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User selects a number of rooms from the dropdown menu next to \u0027No of Rooms label\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enters a valid Check-in date in the \u0027 Check In Date\u0027field in (dd/mm/yyyy) format",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters a valid Check-out in the \u0027Check Out Date\u0027 field in (dd/mm/yyyy) format",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enters total number of adults occupants",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enters total number of child occupants",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify User is being navigated to Select Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_selects_a_location_from_the_Select_Location_dropdown_menu()"
});
formatter.result({
  "duration": 221514600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_a_Hotel_from_the_Select_Hotel_dropdown_menu()"
});
formatter.result({
  "duration": 195855000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_a_Room_Type_from_the_Select_Room_Type_dropdown_menu()"
});
formatter.result({
  "duration": 189036700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_a_number_of_rooms_from_the_dropdown_menu_next_to_No_of_Rooms_label()"
});
formatter.result({
  "duration": 140467000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_a_valid_Check_in_date_in_the_Check_In_Date_field_in_dd_mm_yyyy_format()"
});
formatter.result({
  "duration": 137317500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_a_valid_Check_out_in_the_Check_Out_Date_field_in_dd_mm_yyyy_format()"
});
formatter.result({
  "duration": 146432100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_total_number_of_adults_occupants()"
});
formatter.result({
  "duration": 134369100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_total_number_of_child_occupants()"
});
formatter.result({
  "duration": 131719800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 949722800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_User_is_being_navigated_to_Select_Hotel_page()"
});
formatter.result({
  "duration": 10615000,
  "status": "passed"
});
formatter.after({
  "duration": 137500,
  "status": "passed"
});
formatter.before({
  "duration": 160100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify User is being navigated to Select Hotel page",
  "description": "",
  "id": "hotel-reservation-using-adactin-booking-application;verify-user-is-being-navigated-to-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "User selects the desired Hotel based on Personel Preferences such as Room Type and Total price using the radio button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Users clicks the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify User is being Navigated to Book a Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_selects_the_desired_Hotel_based_on_Personel_Preferences_such_as_Room_Type_and_Total_price_using_the_radio_button()"
});
formatter.result({
  "duration": 111207300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.users_clicks_the_continue_button()"
});
formatter.result({
  "duration": 1088031800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_User_is_being_Navigated_to_Book_a_Hotel_page()"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.after({
  "duration": 139300,
  "status": "passed"
});
formatter.before({
  "duration": 139900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify user is being navigated to Book a Hotel Page",
  "description": "",
  "id": "hotel-reservation-using-adactin-booking-application;verify-user-is-being-navigated-to-book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "User enters the Firstname in Firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User enters the Lastname in Lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enters the address to be billed",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enters a valid 16 digit credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User selects  the credit card type from the Select Credit card type dropdown box",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User selects the expiry Month of the credit card from Select month dropdown box",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User selects the expiry year of the credit card from Select year dropdown box",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User enters the valid 3 digit CVV number",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User clicks the Book now button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "verify User is being navigated to Booking confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_Firstname_in_Firstname_field()"
});
formatter.result({
  "duration": 167797000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_Lastname_in_Lastname_field()"
});
formatter.result({
  "duration": 140958300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_address_to_be_billed()"
});
formatter.result({
  "duration": 170880800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 20
    }
  ],
  "location": "StepDefinition.user_enters_a_valid_digit_credit_card_number(int)"
});
formatter.result({
  "duration": 160441700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_credit_card_type_from_the_Select_Credit_card_type_dropdown_box()"
});
formatter.result({
  "duration": 187137100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_expiry_Month_of_the_credit_card_from_Select_month_dropdown_box()"
});
formatter.result({
  "duration": 206216500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_expiry_year_of_the_credit_card_from_Select_year_dropdown_box()"
});
formatter.result({
  "duration": 188924500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_digit_CVV_number(int)"
});
formatter.result({
  "duration": 151421900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_Book_now_button()"
});
formatter.result({
  "duration": 118993200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_User_is_being_navigated_to_Booking_confirmation_page()"
});
formatter.result({
  "duration": 9798200,
  "status": "passed"
});
formatter.after({
  "duration": 120200,
  "status": "passed"
});
formatter.before({
  "duration": 162600,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verify User being navigated to Booking Confirmation page",
  "description": "",
  "id": "hotel-reservation-using-adactin-booking-application;verify-user-being-navigated-to-booking-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "User clicks on  My Itinerary button to verify booking details",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User clicks on Logout button to exit the application",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "verify User is being navigated to LogOut page.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_My_Itinerary_button_to_verify_booking_details()"
});
formatter.result({
  "duration": 7076712000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Logout_button_to_exit_the_application()"
});
formatter.result({
  "duration": 653161100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_User_is_being_navigated_to_LogOut_page()"
});
formatter.result({
  "duration": 8977900,
  "status": "passed"
});
formatter.after({
  "duration": 109500,
  "status": "passed"
});
});