package project.CreditCardManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.CreditCardManagement.exception.ResourceNotFoundException;
import project.CreditCardManagement.model.Person;
import project.CreditCardManagement.repository.PersonRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/creditsystem/")
public class PersonController {
	
	@Autowired
	private PersonRepository personRepo;
	
	
	
	
	@GetMapping("/allpeople")
	public List <Person>getAllPerson(){
		return personRepo.findAll();
	}

	
	@PostMapping("/addperson")
	public Person newPerson(@RequestBody Person p) {
		return personRepo.save(p);
	}
	
	
	@PutMapping("/person/{id}")
	public ResponseEntity<Person> updatePerson(@PathVariable int id, @RequestBody Person person){
		Person p = personRepo.findById(id).orElseThrow( () -> new ResourceNotFoundException("Person not found..."));
		p.setName(person.getName());
		p.setCreditScore(person.getCreditScore());
		p.setSalary(person.getSalary());
		p.setCardNumber(person.getcardNumber());
		p.setCurrentBalance(person.getCurrentBalance());
		p.setAmountDue(person.getAmountDue());
		p.setMonth(person.getMonth());
		p.setDay(person.getDay());
		p.setYear(person.getYear());
		p.setDueDate(person.getDueDate());
		Person updatedPerson = personRepo.save(p);
		return ResponseEntity.ok(updatedPerson);
	}
	
	@GetMapping("/person/{id}")
	public ResponseEntity<Person> getPersonByName(@PathVariable int id)
	{
		Person p = personRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Person not found..."));
		return ResponseEntity.ok(p);
	}
	
	@DeleteMapping("/person/{id}")
	public String deletePerson(@PathVariable int id)
	{
		personRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Person not found"));
		personRepo.deleteById(id);
		return "Person with id." + id + " removed from the database."	;
	}
}
