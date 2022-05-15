package tn.pi.spring.services;

import java.io.IOException;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import lombok.extern.slf4j.Slf4j;
import tn.pi.spring.entities.Kidzone;
import tn.pi.spring.repository.KidZoneRepository;
import tn.pi.spring.specs.KidZoneSpecs;

@Service
@Slf4j
public class KidZoneService implements IKidZoneService {
	@Autowired
	KidZoneRepository kzRepository;
	
	
	//getall
	@Override
	public List<Kidzone> retrievekidzone() {

		return (List<Kidzone>) kzRepository.findAll();
	}
	
	//getbyid
	@Override
	public Kidzone retrieveById(Long id) {
		return kzRepository.findById(id).orElse(null);
	}

	//update
	@Override
	public Kidzone updatekidzone(Kidzone k) {
		return kzRepository.save(k);
	}
	
	
	//delete
	@Override
	public void deletekidzone(Long id) {
		kzRepository.deleteById(id);
		
	}
	


	@Override
	public List<Kidzone> testQte(Integer qt) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void retrieveStatuskidzone() {
		// TODO Auto-generated method stub
		
	}


	
	
	@Override
	public List<Kidzone> search(Integer pagenumber,Integer pagesize,String description, String numTel) {
		Pageable page=PageRequest.of(pagenumber, pagesize);
		Specification<Kidzone> spec=KidZoneSpecs.getSpecs(description,numTel);
		return kzRepository.findAll(spec,page);
	}

	//add
	@Override
	public Kidzone savekidzone(Kidzone k, MultipartFile file) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		if(fileName.contains(".."))
		{
			System.out.println("not a a valid file");
		}
		try {
			k.setLogo(Base64.getEncoder().encodeToString(file.getBytes()));
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		return kzRepository.save(k);
		
	}
}
	