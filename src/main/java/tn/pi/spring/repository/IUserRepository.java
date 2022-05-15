package tn.pi.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.pi.spring.entities.User;

public interface IUserRepository extends JpaRepository<User, Long> {

}
