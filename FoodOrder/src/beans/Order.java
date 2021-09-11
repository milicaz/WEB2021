package beans;

import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import dao.RestaurantDAOJson;

public class Order {

	private String id;
	private ArrayList<Item> items = new ArrayList<Item>();
	private int restaurantId;
	private String datum;
	private double price;
	private User kupac;
	private String status;
	private String zatrazeno;
	private int dostavljacId;
	private String statusMenadzer;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(String id, ArrayList<Item> items, int restaurantId, String datum, double price, User kupac,
			String status, String zatrazeno, int dostavljacId, String statusMenadzer) {
		super();
		this.id = id;
		this.items = items;
		this.restaurantId = restaurantId;
		this.datum = datum;
		this.price = price;
		this.kupac = kupac;
		this.status = status;
		this.zatrazeno = zatrazeno;
		this.dostavljacId = dostavljacId;
		this.statusMenadzer = statusMenadzer;
	}

	public String getStatusMenadzer() {
		return statusMenadzer;
	}

	public void setStatusMenadzer(String statusMenadzer) {
		this.statusMenadzer = statusMenadzer;
	}

	public int getDostavljacId() {
		return dostavljacId;
	}

	public void setDostavljacId(int dostavljacId) {
		this.dostavljacId = dostavljacId;
	}

	public String getZatrazeno() {
		return zatrazeno;
	}

	public void setZatrazeno(String zatrazeno) {
		this.zatrazeno = zatrazeno;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
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
