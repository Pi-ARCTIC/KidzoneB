
package tn.pi.spring.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

import tn.pi.spring.entities.Kidzone;

public interface KidZoneRepository  extends JpaRepository<Kidzone, Long>{

	
	List<Kidzone> findAll(Specification<Kidzone> spec, Pageable page);
	
	@Query(value="SELECT * FROM kidzone ORDER BY creation_date DESC", nativeQuery = true) 
	List<Kidzone> findAllByOrderByDateAsc();
	  
	

}
