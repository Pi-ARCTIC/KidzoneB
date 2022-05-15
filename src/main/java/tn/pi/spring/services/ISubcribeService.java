package tn.pi.spring.services;

import tn.pi.spring.entities.Kidzone;
import tn.pi.spring.entities.Subscribe;

public interface ISubcribeService {
	public Subscribe subscribe(Subscribe subcribe);
	Subscribe retrieveById(Long id);
	Subscribe update(Subscribe k);
	void deletesub(Long id);

}
