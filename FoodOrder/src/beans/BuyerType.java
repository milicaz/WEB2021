package beans;

public class BuyerType {
	
	private int id;
	private String name;
	private int discount;
	private int requiredPoints;
	
	public BuyerType() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BuyerType(String name, int discount, int requiredPoints) {
		super();
		this.name = name;
		this.discount = discount;
		this.requiredPoints = requiredPoints;
	}
	
	

	public BuyerType(int id, String name, int discount, int requiredPoints) {
		super();
		this.id = id;
		this.name = name;
		this.discount = discount;
		this.requiredPoints = requiredPoints;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public int getRequiredPoints() {
		return requiredPoints;
	}

	public void setRequiredPoints(int requiredPoints) {
		this.requiredPoints = requiredPoints;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	
	

}
