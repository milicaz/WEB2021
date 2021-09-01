package beans;

import java.util.ArrayList;
import java.util.Date;

public class Order {
	
	private int id;
	private ArrayList<Item> orderedItems = new ArrayList<Item>();
	private Restaurant restaurant;
	private Date date;
	private double price;
	// ime i prezime kupca ???
	private String status;
	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(int id, ArrayList<Item> orderedItems, Restaurant restaurant, Date date, double price, String status) {
		super();
		this.id = id;
		this.orderedItems = orderedItems;
		this.restaurant = restaurant;
		this.date = date;
		this.price = price;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public ArrayList<Item> getOrderedItems() {
		return orderedItems;
	}

	public void setOrderedItems(ArrayList<Item> orderedItems) {
		this.orderedItems = orderedItems;
	}

	public Restaurant getRestaurant() {
		return restaurant;
	}

	public void setRestaurant(Restaurant restaurant) {
		this.restaurant = restaurant;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
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
	
	
	
}
