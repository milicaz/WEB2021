package dao;

import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;

import org.eclipse.jdt.internal.compiler.ast.ThisReference;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import beans.User;

public class UserDAOJson {
	
	public HashMap<Integer, User> users = new HashMap<>();
	
	
	public HashMap<Integer, User> getUsers() {
		return users;
	}

	public void setUsers(HashMap<Integer, User> users) {
		this.users = users;
	}
	
	public UserDAOJson() {
		super();
		// TODO Auto-generated constructor stub
	}


	public UserDAOJson(String contextPath) {
		
		loadUsers(contextPath);
		
	}
	
	// Citanje korisnika iz json file-a i upisivanje u users	
	
	public void loadUsers(String contextPath) {
		
		File file=new File(contextPath + "/json/users.json");
		ObjectMapper objectMapper=new ObjectMapper();
		objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
		objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
		objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_ARRAY_AS_NULL_OBJECT, true);
		
		try {
			
			User[] allUsers = objectMapper.readValue(file, User[].class);
			System.out.println("Svi korisnici su " + allUsers);
			
			for(User u : allUsers) {
				users.put(u.getId(), u);
				System.out.println("Korisnici su: " + users);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//Vraca sve korisnike
	public Collection<User> findAll() {
		return users.values();
	}
	
	//Upisivanje korisnika u users.json
	public User saveUser(User user) {
		int id = newId();
		user.setId(id);
		user.setRole("kupac");
		users.put(user.getId(), user);
		return user;	
	}
	
	public User updateUser(User user) {
		users.replace(user.getId(), user);
		return user;
	}
	
	//Generisanje novog id-a
	public int newId() {
		int id = 1;
		for(User u:users.values()) {
			if(u.getId() == id) {
				id++;
			}
		}
		return id;
		
	}
	
	//Logovanje
	public User login(String username, String password) {
		
		for(User u : users.values()) {
			if(u.getUsername().equals(username)) {
				if(u.getPassword().equals(password)) {
					return u;
				}
			}
		}
		
		return null;
		
	}
	
	
	

}
