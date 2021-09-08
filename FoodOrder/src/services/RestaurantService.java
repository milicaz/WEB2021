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

import beans.Restaurant;
import dao.RestaurantDAOJson;

@Path("/restaurants")
public class RestaurantService {

	@Context
	ServletContext ctx;
	
	public RestaurantService() {
		
	}
	@PostConstruct
	public void init() {
		if(ctx.getAttribute("restaurantDAO") == null) {
			String contextPath = ctx.getRealPath("");
			ctx.setAttribute("restaurantDAO", new RestaurantDAOJson(contextPath));
		}
	}
	
	@GET
	@Path("/allRest")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Restaurant> getRestaurants() {
		RestaurantDAOJson dao = (RestaurantDAOJson) ctx.getAttribute("restaurantDAO");
		return dao.findAll();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Restaurant getRestaurant(@PathParam("id") int id) {
		RestaurantDAOJson dao = (RestaurantDAOJson) ctx.getAttribute("restaurantDAO");
		return dao.findOne(id);
	}
	
}
