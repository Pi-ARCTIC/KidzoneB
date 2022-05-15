package tn.pi.spring.Controller;

import java.io.ByteArrayInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.models.media.MediaType;
import tn.pi.spring.entities.Kidzone;
import tn.pi.spring.entities.Subscribe;
import tn.pi.spring.repository.SubscribeRepository;
import tn.pi.spring.services.ExportSubscribeService;
import tn.pi.spring.services.ISubcribeService;

@RestController  
@RequestMapping("subsribeController")
public class SubscribeController {

	@Autowired
	ISubcribeService service;
	
	
	@Autowired
	SubscribeRepository repo;
	
	@Autowired
	ExportSubscribeService exportservice;
	
	@PostMapping(value="/Subscribe" )
    @ResponseBody
    public Subscribe ajoutersubscription(@RequestBody Subscribe subscribe){
return service.subscribe(subscribe);
    }
	
	
	@RequestMapping(value = "/affsubscriber/{id}", method = RequestMethod.GET)
	@ResponseBody 
	Subscribe affichersubscribeById(@PathVariable("id")Long id) {
	return service.retrieveById(id);
	}
	
	
	
	
	
	@GetMapping("/exportpdf")
	public ResponseEntity<InputStreamResource> exportTermsPdf()
	{
		List<Subscribe> subscribes = (List<Subscribe>) repo.findAll();
		ByteArrayInputStream byt = exportservice.subscribePDFReport(subscribes);
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content Disposition", "inline; filename=subscribes.pdf");
		return ResponseEntity.ok().headers(headers).contentType(org.springframework.http.MediaType.APPLICATION_PDF).body(new InputStreamResource(byt));
	}
	@GetMapping("/subscriptions")
	@ResponseBody
	List<Subscribe> affichersubs(){
		return repo.findAll();
	}
	
	@PutMapping("/updatesub")
	@ResponseBody
	Subscribe updatesub(@RequestBody Subscribe k) { 
	return service.update(k);
	}
	
	
	@DeleteMapping("/deletesub/{id}")
	@ResponseBody
	void supprimersub(@PathVariable("id") Long id) {
	repo.deleteById(id);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
