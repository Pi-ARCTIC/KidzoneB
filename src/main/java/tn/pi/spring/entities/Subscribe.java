package tn.pi.spring.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;




@Entity
@Table(name="subscribe")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Subscribe implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	
	String fname;
	String lname;
	long Age;
	@Temporal(TemporalType.DATE)
	Date dateInscri = new Date(System.currentTimeMillis());
	
	@ManyToOne
	@JsonBackReference
	 User usersub;
	
	@ManyToOne
	 Kidzone kidzonesub;
	
	
	
	
	
}
