package tn.pi.spring.Controller;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.Base64;
import java.util.Date;
import java.util.List;

import javax.persistence.criteria.Path;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;


import tn.pi.spring.entities.Kidzone;
import tn.pi.spring.repository.KidZoneRepository;
import tn.pi.spring.services.IKidZoneService;



@RestController  
@RequestMapping("kidzoneController")
public class KidZoneController {
	@Autowired
	IKidZoneService kzService;
	@Autowired
	KidZoneRepository kzrepo;
	
	@GetMapping("/afficherkz")
	@ResponseBody 
	List<Kidzone> afficherkidzone(){
	return kzService.retrievekidzone();
	}
	
	//GetAllRecords order Desc By Date
	@GetMapping("/AfficherKidsOrderByDate")
	@ResponseBody 
	List<Kidzone> getAllKidzonesOrderByDate()
	{
		return kzrepo.findAllByOrderByDateAsc();
	}
	
	
	@GetMapping("/afficherkz/{id}")
	@ResponseBody 
	Kidzone afficherstock(@PathVariable("id")Long id) {
	return kzService.retrieveById(id);
	}
	
	@GetMapping("/afficherSkz")
	@ResponseBody 
	Kidzone afficherstock2(@RequestParam("id")Long id) {
	return kzService.retrieveById(id);
	}
	/*
	@PostMapping("/ajouterkz")
	@ResponseBody
	Kidzone ajouterStock(@RequestBody Kidzone k) { 
	
	return kzService.savekidzone(k);
	} 
	*/
	
	@PutMapping("/updatekz")
	@ResponseBody
	Kidzone updatekidzone(@RequestBody Kidzone k) { 
	return kzService.updatekidzone(k);
	}
	
	
	@DeleteMapping("/deletekz/{id}")
	@ResponseBody
	void supprimerkidzone(@PathVariable("id") Long id) {
	kzService.deletekidzone(id);
	}
	
	
	@GetMapping("/searching")
	public List<Kidzone> search(@RequestParam(required=false)Integer pagenumber,
			@RequestParam(required=false)Integer pagesize,
			@RequestParam(required=false)String description,
			@RequestParam(required=false)String numTel)
	{
		return kzService.search(pagenumber, pagesize, description, numTel);
	}
	
	
	@GetMapping("/kidZonebyid/{id}")
	public Kidzone getZidkoneById(@PathVariable("id") Long id) 
	{
		 Kidzone kidzone = kzrepo.findById(id).orElse(null);
		return kidzone;
		
	}
	
	@PutMapping("/upkidzone/{id}")
	public ResponseEntity<Kidzone> udateKidzone(@PathVariable("id") Long id,    @RequestBody Kidzone kidzone)
	{
		Kidzone kid = kzrepo.findById(id).orElse(null);
		
		kid.setDescription(kidzone.getDescription());
		kid.setCost(kidzone.getCost());
		kid.setNbEmp(kidzone.getNbEmp());
		kid.setNumTel(kidzone.getNumTel());
		Kidzone k  = kzrepo.save(kid);
		return ResponseEntity.ok(k);
	}
	
	
	
	
	
@RequestMapping(value="/addkidzone", method =RequestMethod.POST, produces= {"application/json"})
@ResponseBody
	
    public Kidzone savePost(Kidzone p,@RequestParam("file") MultipartFile file)
    		
    {  
    	return kzService.savekidzone(p, file) ;
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


}