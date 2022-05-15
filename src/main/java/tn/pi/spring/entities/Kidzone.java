package tn.pi.spring.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name="kidzone")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Kidzone implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	 String description;
	  
	@Lob
	@Column(columnDefinition = "MEDUIMBLOB")
	String logo;
	 
	 long nbEmp;
	 
	 @Temporal(TemporalType.DATE)
	 Date creationDate = new Date(System.currentTimeMillis());
	 String numTel;
	 long cost;
	 String address;
	 
	 @ManyToOne
	 User userKidzone;
	 
	 
	 @OneToMany(cascade = CascadeType.ALL, mappedBy = "kidzoneEvent")
		Set<Event> events;
	 
	 @JsonIgnore
	 @OneToMany(cascade = CascadeType.ALL, mappedBy = "kidzonesub")
		Set<Subscribe> subsribes;
	

}
