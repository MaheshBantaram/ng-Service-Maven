package com.ggk.test;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Component;

@Component
@Path("/countryService")
public class CountryServiceImpl implements CountryService {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getCountries")
	public List<Country> helloRest() {
		System.out.println("IN GET COUNTRIES");
		List<Country> countries = new ArrayList<Country>();
		Country c = new Country();
		c.setId(1);
		c.setName("India");
		Country c2 = new Country();
		c2.setId(2);
		c2.setName("US");
		countries.add(c);
		countries.add(c2);
		return countries;
	}

}
