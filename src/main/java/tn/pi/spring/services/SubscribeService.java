package tn.pi.spring.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import tn.pi.spring.entities.Subscribe;
import tn.pi.spring.entities.User;
import tn.pi.spring.repository.SubscribeRepository;



@Service
@Slf4j
public class SubscribeService implements ISubcribeService {

	
	@Autowired
	SubscribeRepository subrep;
	@Override
	public Subscribe subscribe(Subscribe subcribe) {
		
		//Kidzone kidzone = kzrepo.findById(KidzoneId).orElse(null);
		//User user = userrepo.findById(UserId).orElse(null);
		
		//subcribe.setKidzonesub(kidzone);
		subrep.save(subcribe);
		return subcribe; 
		}
	@Override
	public Subscribe retrieveById(Long id) {
		return subrep.findById(id).orElse(null);
	}
	@Override
	public Subscribe update(Subscribe k) {
		return subrep.save(k);
	}
	@Override
	public void deletesub(Long id) {
		// TODO Auto-generated method stub
		
	}
	}
	


