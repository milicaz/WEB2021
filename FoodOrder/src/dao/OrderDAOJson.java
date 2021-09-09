package dao;

import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import beans.Order;

public class OrderDAOJson {
	
	public HashMap<Double, Order> orders = new HashMap<>();

	public HashMap<Double, Order> getOrders() {
		return orders;
	}

	public void setOrders(HashMap<Double, Order> orders) {
		this.orders = orders;
	}

	public OrderDAOJson() {
		
	}
	
	public OrderDAOJson(String contextPath) {
		loadOrders(contextPath);
	}
	
	public void loadOrders(String contextPath) {
		
		File file=new File(contextPath + "/json/porudzbine.json");
		ObjectMapper objectMapper=new ObjectMapper();
		objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
		objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
		objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_ARRAY_AS_NULL_OBJECT, true);
		
		try {
			Order[] allOrders = objectMapper.readValue(file, Order[].class);
			System.out.println("Sve porudzbine su: " + allOrders);
			
			for(Order o : allOrders) {
				orders.put(o.getId(), o);
				System.out.println("Porudzbine su: " + orders);
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
	
	public Collection<Order> findAll() {
		return orders.values();
	}
	
	public Order findOne(int restaurantId) {
		for(Order o : orders.values()) {
			if(o.getRestaurantId() == restaurantId) {
				return o;
			}
		}
		return null;
	}
	
	

}
