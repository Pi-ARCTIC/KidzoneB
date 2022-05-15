package tn.pi.spring.services;

import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import tn.pi.spring.entities.Kidzone;

public interface IKidZoneService {
	List<Kidzone> retrievekidzone();
	Kidzone retrieveById(Long id);
	Kidzone savekidzone(Kidzone s, MultipartFile file);
	Kidzone updatekidzone(Kidzone k);
	void deletekidzone(Long id);
	List<Kidzone> testQte(Integer qt);
	void retrieveStatuskidzone();
	List <Kidzone> search(Integer pagenumber,Integer pagesize,String description,String numTel);
	
	
}
