package beans;

public class Comment {
	
	//kupac porudzbine koji je ostavio komentar
	private Restaurant restaurant;
	private String text;
	private int rating;
	
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Restaurant getRestaurant() {
		return restaurant;
	}

	public void setRestaurant(Restaurant restaurant) {
		this.restaurant = restaurant;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
	
	

}
