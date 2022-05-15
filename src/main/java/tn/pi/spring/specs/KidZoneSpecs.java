package tn.pi.spring.specs;

import java.util.Date;

import org.springframework.data.jpa.domain.Specification;

import tn.pi.spring.entities.Kidzone;

public class KidZoneSpecs {

	public static Specification<Kidzone> getSpecs(String description,String numTel) {

		Specification<Kidzone> spec=null;
		Specification<Kidzone> temp=null;
		if(description!=null)
		{
			spec=getKidZoneByDescription(description);
			temp=spec!= null?Specification.where(spec).and(temp):temp;
		}
		
		
		
		if(numTel!=null)
		{
			spec=getKidZoneByNumTel(numTel);
			temp=spec!= null?Specification.where(spec).and(temp):temp;
		}
		
		
		return null;
	}

	private static Specification<Kidzone> getKidZoneByNumTel(String numTel) {
		return (root,query,criteriaBuilder)->{
			return criteriaBuilder.like(criteriaBuilder.lower(root.get("numTel")),"%"+ numTel.toLowerCase()+"%" );
			};
	}

	private static Specification<Kidzone> getKidZoneByDescription(String description) {
		
		return (root,query,criteriaBuilder)->{
			return criteriaBuilder.like(criteriaBuilder.lower(root.get("description")),"%"+description.toLowerCase()+"%" );
			};
	}

}
