package dao;

import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import beans.Item;
import beans.Order;
import beans.User;

public class ItemDAOJson {

	public HashMap<Integer, Item> items = new HashMap<>();

	public HashMap<Integer, Item> getItems() {
		return items;
	}

	public void setItems(HashMap<Integer, Item> items) {
		this.items = items;
	}

	public ItemDAOJson() {
	
	}
	
	public ItemDAOJson(String contextPath) {
		loadItems(contextPath);
	}
	
	public void loadItems(String contextPath) {
		
		File file=new File(contextPath + "/json/artikli.json");
		ObjectMapper objectMapper=new ObjectMapper();
		objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
		objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
		objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_ARRAY_AS_NULL_OBJECT, true);
		
		try {
			Item[] allItems = objectMapper.readValue(file, Item[].class);
			System.out.println("Svi artikli su " + allItems);
			
			for(Item i : allItems) {
				items.put(i.getId(), i);
				System.out.println("Artikli su: " + items);
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
	
	public Collection<Item> findAll() {
		return items.values();
	}
	
	public Item findOne(int id) {
		return items.containsKey(id) ? items.get(id) : null;
	}
	
	public String findOneById(int id) {
		for(Item i : items.values()) {
			if(i.getId() == id) {
				return i.getName();
			}
		}
		return null;
	}
	
}
