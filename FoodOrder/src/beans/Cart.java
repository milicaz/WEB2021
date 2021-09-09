package beans;

public class Cart {

	private int id;
	private int[] artikliId;
	private int kupacId;
	private int price;

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	

	public Cart(int id, int[] artikliId, int kupacId, int price) {
		super();
		this.id = id;
		this.artikliId = artikliId;
		this.kupacId = kupacId;
		this.price = price;
	}




	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}




	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int[] getArtikliId() {
		return artikliId;
	}

	public void setArtikliId(int[] artikliId) {
		this.artikliId = artikliId;
	}

	public int getKupacId() {
		return kupacId;
	}

	public void setKupacId(int kupacId) {
		this.kupacId = kupacId;
	}
	
	
	
	
}
