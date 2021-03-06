package services;

import java.util.Collection;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.sun.media.jfxmedia.Media;

import beans.User;
import dao.UserDAOJson;

@Path("/users")
public class UserService {

	@Context
	ServletContext ctx;
	
	public UserService() {
		
	}
	
	@PostConstruct
	// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
	public void init() {
		// Ovaj objekat se instancira vi?e puta u toku rada aplikacije
		// Inicijalizacija treba da se obavi samo jednom
		if (ctx.getAttribute("userDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("userDAO", new UserDAOJson(contextPath));
		}
	}
	
	@GET
	@Path("/allUsers")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<User> getUsers() {
		UserDAOJson dao = (UserDAOJson) ctx.getAttribute("userDAO");
		return dao.findAll();
	}
	
	@POST
	@Path("/saveUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User saveUser(User user) {
		UserDAOJson dao = (UserDAOJson) ctx.getAttribute("userDAO");
		
		Collection<User> us = dao.findAll();
		
		for(User u : us) {
			if(u.getUsername().equals(user.getUsername())) {

				return null;
			}
			
		}
		
		return dao.saveUser(user);
	}
	
	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User loginUser(User user, @Context HttpServletRequest request) {
		UserDAOJson dao = (UserDAOJson) ctx.getAttribute("userDAO");
		
		User us = dao.login(user.getUsername(), user.getPassword());
		
		if(us != null) {
			request.getSession().setAttribute("loggedUser", us);
			System.out.println("User je " + us.getUsername());
			return us;
		}
		
		return null;
		
	}
	
	@GET
	@Path("/getLogged")
	@Produces(MediaType.APPLICATION_JSON)
	public User getLogged(User user, @Context HttpServletRequest req) {
		return (User) req.getSession().getAttribute("loggedUser");
	}
	
	@PUT
	@Path("/updateProfil")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User update(User user, @Context HttpServletRequest request) {
		UserDAOJson dao = (UserDAOJson) ctx.getAttribute("userDAO");
		request.getSession().setAttribute("loggedUser", user);
		return dao.updateUser(user);
		
	}
	
	@POST
	@Path("/logout")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response logout(@Context HttpServletRequest request) {
		
		request.getSession().invalidate();
		
		System.out.println("Korisnik je uspesno izlogovan");
		
		return Response.ok().build();
		
	}
	
	@GET
	@Path("/oneUser/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public User getUser(@PathParam("id") int id) {
		UserDAOJson dao = (UserDAOJson) ctx.getAttribute("userDAO");
		return dao.findOne(id);
	}
	
}
