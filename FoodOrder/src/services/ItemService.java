package services;

import java.util.Collection;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.Item;
import dao.ItemDAOJson;


@Path("/items")
public class ItemService {
	
	@Context
	ServletContext ctx;

	public ItemService() {
		
	}
	
	@PostConstruct
	public void init() {
		if(ctx.getAttribute("itemDAO") == null) {
			String contextPath = ctx.getRealPath("");
			ctx.setAttribute("itemDAO", new ItemDAOJson(contextPath));
		}
	}
	
	@GET
	@Path("/allItems")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Item> getItems() {
		ItemDAOJson dao = (ItemDAOJson) ctx.getAttribute("itemDAO");
		return dao.findAll();
	}
	

}
