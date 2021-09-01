package beans;

public class Location {
	
	private double longitude;
	private double latitude;
	// Adresa
	private String street;
	private int streetNumber;
	private String city;
	private double zipCode;
	
	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Location(double longitude, double latitude, String street, int streetNumber, String city, double zipCode) {
		super();
		this.longitude = longitude;
		this.latitude = latitude;
		this.street = street;
		this.streetNumber = streetNumber;
		this.city = city;
		this.zipCode = zipCode;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public int getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(int streetNumber) {
		this.streetNumber = streetNumber;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public double getZipCode() {
		return zipCode;
	}

	public void setZipCode(double zipCode) {
		this.zipCode = zipCode;
	}
	
	

}
