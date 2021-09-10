package beans;

import java.util.ArrayList;
import java.util.Date;

import dao.RestaurantDAOJson;

public class Order {
	
	private double id;
	private ArrayList<Item> items = new ArrayList<Item>();
	private int restaurantId;
	private String datum;
	private double price;
	private User kupac;
	private String status;
	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	

	public Order(double id, ArrayList<Item> items, int restaurantId, String datum, double price, User kupac,
			String status) {
		super();
		this.id = id;
		this.items = items;
		this.restaurantId = restaurantId;
		this.datum = datum;
		this.price = price;
		this.kupac = kupac;
		this.status = status;
	}





	public double getId() {
		return id;
	}

	public void setId(double id) {
		this.id = id;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	public int getRestaurantId() {
		return restaurantId;
	}




	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}




	public String getDatum() {
		return datum;
	}




	public void setDatum(String datum) {
		this.datum = datum;
	}





	public ArrayList<Item> getItems() {
		return items;
	}





	public void setItems(ArrayList<Item> items) {
		this.items = items;
	}





	public User getKupac() {
		return kupac;
	}





	public void setKupac(User kupac) {
		this.kupac = kupac;
	}

	
	
	
}
