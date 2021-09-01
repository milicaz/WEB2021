package beans;

import java.util.ArrayList;

public class Restaurant {
	
	private String name;
	private String type;
	private boolean status;
	private ArrayList<Item> items = new ArrayList<Item>();
	private Location location;
	private byte[] logo;
	
	public Restaurant() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Restaurant(String name, String type, boolean status, ArrayList<Item> items, Location location, byte[] logo) {
		super();
		this.name = name;
		this.type = type;
		this.status = status;
		this.items = items;
		this.location = location;
		this.logo = logo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public ArrayList<Item> getItems() {
		return items;
	}

	public void setItems(ArrayList<Item> items) {
		this.items = items;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public byte[] getLogo() {
		return logo;
	}

	public void setLogo(byte[] logo) {
		this.logo = logo;
	}
	
	

}