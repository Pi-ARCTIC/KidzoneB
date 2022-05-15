package tn.pi.spring.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
@Table(name="user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 long id;
	
	 String firstName;
	 String lastName;
	 String email;
	 String username;
	 String password;
	 String image;
	@Enumerated(EnumType.STRING)
	 Role role;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "userApp")
	Set<Appointment> appointments;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "userRec")
	Set<Reclamation> reclamations;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "userPost")
	Set<Post> posts;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "userComment")
	Set<Comment> comments;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "userMessage")
	Set<Message> messages;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "userKidzone")
	Set<Kidzone> kidzones;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "userNotif")
	Set<Notification> notifs;
	
	
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "usersub")
	Set<Subscribe> subsribes;
	
	
	
	

}
