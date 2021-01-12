package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.BookAhotel;
import com.adactin.pom.HomePageLogin;
import com.adactin.pom.SearchHotel;
import com.adactin.pom.SelectHotel;
import com.adactin.pom.ViewItinerary;

public class PageObjectManager {
	
	public static WebDriver driver;
	
	private HomePageLogin hp; 
	private SelectHotel sh;
	private SearchHotel seh;
	private BookAhotel bh;
	private ViewItinerary vi;
	
	public PageObjectManager(WebDriver ldriver) {
		this.driver = ldriver;
		
		
	}
	public HomePageLogin getHp() {
		hp = new HomePageLogin(driver);
		return hp;
	}
	public SelectHotel getSh() {
		sh = new SelectHotel(driver);
		return sh;
	}
	public SearchHotel getSeh() {
		seh= new SearchHotel(driver);
		return seh;
	}
	public BookAhotel getBh() {
		bh = new BookAhotel(driver);
		return bh;
	}
	public ViewItinerary getVi() {
		vi = new ViewItinerary(driver);
		return vi;
	}
	

}
