package com.stefanini.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.stefanini.model.Agente;

@Path("/agente")
@RequestScoped
public class AgenteController {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Agente> get(){
		
		List<Agente> agente = new ArrayList<Agente>();
		agente.add(new Agente("Marcos fellipe", new Date(),3));
		
		return agente;
	}

}