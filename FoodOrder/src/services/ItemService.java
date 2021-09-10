package services;

import java.util.Collection;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.Item;
import beans.User;
import dao.ItemDAOJson;
import dao.UserDAOJson;


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
	
	@GET
	@Path("/oneItem/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Item getItem(@PathParam("id") int id) {
		ItemDAOJson dao = (ItemDAOJson) ctx.getAttribute("itemDAO");
		return dao.findOne(id);
	}
	
	@GET
	@Path("/oneI/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getI(@PathParam("id") int id) {
		ItemDAOJson dao = (ItemDAOJson) ctx.getAttribute("itemDAO");
		return dao.findOneById(id);
	}

}
