package services;

import java.util.Collection;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.Order;
import beans.User;
import dao.OrderDAOJson;
import dao.RestaurantDAOJson;
import dao.UserDAOJson;

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
	
	@GET
	@Path("/oneOrder/{restaurantId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Order getOrder(@PathParam("restaurantId") int restaurantId) {
		OrderDAOJson dao = (OrderDAOJson) ctx.getAttribute("orderDAO");
		return dao.findOne(restaurantId);
	}
	
	@GET
	@Path("/orderByKupac/{kupacId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Order getOrderByKupac(@PathParam("kupacId") int kupacId) {
		OrderDAOJson dao = (OrderDAOJson) ctx.getAttribute("orderDAO");
		return dao.findByKupacId(kupacId);
	}
	
	@POST
	@Path("/saveOrder")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Order saveOrder(Order order) {
		OrderDAOJson dao = (OrderDAOJson) ctx.getAttribute("orderDAO");
		return dao.saveOrder(order);
	}
	
	@GET
	@Path("/newOrder/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Order getNewOrder(@PathParam("id") String id) {
		OrderDAOJson dao = (OrderDAOJson) ctx.getAttribute("orderDAO");
		return dao.findNewOrder(id);
	}

}
