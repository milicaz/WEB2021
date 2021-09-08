package dao;

import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import beans.Restaurant;

public class RestaurantDAOJson {
	
	public HashMap<Integer, Restaurant> restorani = new HashMap();

	public HashMap<Integer, Restaurant> getRestorani() {
		return restorani;
	}

	public void setRestorani(HashMap<Integer, Restaurant> restorani) {
		this.restorani = restorani;
	}

	public RestaurantDAOJson() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public RestaurantDAOJson(String contextPath) {
		loadRestaurants(contextPath);
	}
	
	public void loadRestaurants(String contextPath) {
		
		File file=new File(contextPath + "/json/restorani.json");
		ObjectMapper objectMapper=new ObjectMapper();
		objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
		objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
		objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_ARRAY_AS_NULL_OBJECT, true);
		
		try {
			Restaurant[] allRest = objectMapper.readValue(file, Restaurant[].class);
			System.out.println("Svi restorani su: " + allRest);
			
			for(Restaurant r : allRest) {
				restorani.put(r.getId(), r);
				System.out.println("Restorani su: " + restorani);
			}
			
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public Collection<Restaurant> findAll() {
		return restorani.values();
	}

}
