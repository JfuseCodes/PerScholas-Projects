package project.CreditCardManagement.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import project.CreditCardManagement.exception.ResourceNotFoundException;
import project.CreditCardManagement.model.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person,Integer>{
	//Student findStudentByName(String name);
	List<Person> findByName(String name);
}


