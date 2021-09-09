package beans;

import java.util.ArrayList;
import java.util.Date;

import dao.RestaurantDAOJson;

public class Order {
	
	private double id;
	private int[] orderItemId;
	private int restaurantId;
	private String datum;
	private double price;
	private int kupacId;
	private String status;
	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	


	public Order(double id, int[] orderItemId, int restaurantId, String datum, double price, int kupacId, String status) {
		super();
		this.id = id;
		this.orderItemId = orderItemId;
		this.restaurantId = restaurantId;
		this.datum = datum;
		this.price = price;
		this.kupacId = kupacId;
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


	public int[] getOrderItemId() {
		return orderItemId;
	}


	public void setOrderItemId(int[] orderItemId) {
		this.orderItemId = orderItemId;
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




	public int getKupacId() {
		return kupacId;
	}




	public void setKupacId(int kupacId) {
		this.kupacId = kupacId;
	}
	
	
	
}
