package services;

import java.util.Collection;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.Order;
import dao.OrderDAOJson;
import dao.RestaurantDAOJson;

@Path("/orders")
public class OrderService {
	
	@Context
	ServletContext ctx;
	
	public OrderService() {
		
	}
	
	@PostConstruct
	public void init() {
		if(ctx.getAttribute("orderDAO") == null) {
			String contextPath = ctx.getRealPath("");
			ctx.setAttribute("orderDAO", new OrderDAOJson(contextPath));
		}
	}
	
	@GET
	@Path("/allOrders")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Order> getOrders() {
		OrderDAOJson dao = (OrderDAOJson) ctx.getAttribute("orderDAO");
		return dao.findAll();
	}

}
