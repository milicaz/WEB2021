package beans;

public class User {
	
	private int id;
	private String username;  //jednistveno
	private String password;
	private String firstName;
	private String lastName;
	private String gender;
	private String dateOfBirth;
	private String role;
	
	//Za menadzera
	private int restoranId;
	
	//Za kupca
	private int korpaId;
	private int bodovi;
	private int tipKupcaId;
	
	//Za dostavljaca
	private int[] prodzbineId;
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}


	public User(String username, String password, String firstName, String lastName, String gender, String dateOfBirth,
			String role) {
		super();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.role = role;
	}
	
	


	public User(int id, String username, String password, String firstName, String lastName, String gender,
			String dateOfBirth, String role) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.role = role;
	}
	
	


	public User(int id, String username, String password, String firstName, String lastName, String gender,
			String dateOfBirth, String role, int restoranId, int korpaId, int bodovi, int tipKupcaId,
			int[] prodzbineId) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.role = role;
		this.restoranId = restoranId;
		this.korpaId = korpaId;
		this.bodovi = bodovi;
		this.tipKupcaId = tipKupcaId;
		this.prodzbineId = prodzbineId;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getDateOfBirth() {
		return dateOfBirth;
	}


	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public int getRestoranId() {
		return restoranId;
	}


	public void setRestoranId(int restoranId) {
		this.restoranId = restoranId;
	}


	public int getKorpaId() {
		return korpaId;
	}


	public void setKorpaId(int korpaId) {
		this.korpaId = korpaId;
	}


	public int getBodovi() {
		return bodovi;
	}


	public void setBodovi(int bodovi) {
		this.bodovi = bodovi;
	}


	public int getTipKupcaId() {
		return tipKupcaId;
	}


	public void setTipKupcaId(int tipKupcaId) {
		this.tipKupcaId = tipKupcaId;
	}


	public int[] getProdzbineId() {
		return prodzbineId;
	}


	public void setProdzbineId(int[] prodzbineId) {
		this.prodzbineId = prodzbineId;
	}
	
	
	
	
	

}
