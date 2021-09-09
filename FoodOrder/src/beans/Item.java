package beans;

import java.util.UUID;

public class Item {

	private int id;
	private String name;
	private double price;
	private String type;
	private int restaurantId;
	private double amount;
	private String description;
	private byte[] picture;
	
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Item(String name, double price, String type, int restaurantId, double amount, String description,
			byte[] picture) {
		super();
		this.name = name;
		this.price = price;
		this.type = type;
		this.restaurantId = restaurantId;
		this.amount = amount;
		this.description = description;
		this.picture = picture;
	}
	
	
	

	public Item(int id, String name, double price, String type, int restaurantId, double amount, String description,
			byte[] picture) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.type = type;
		this.restaurantId = restaurantId;
		this.amount = amount;
		this.description = description;
		this.picture = picture;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	public int getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	
	
	
	
}
