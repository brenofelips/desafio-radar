package br.com.desafio_radar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.desafio_radar.entities.Person;
import br.com.desafio_radar.service.PersonService;

@RestController
@RequestMapping("/api/persons")
public class PersonController {
  @Autowired
  private PersonService personService;

  @GetMapping
  public ResponseEntity<List<Person>> list() {
    List<Person> persons = personService.getAllPersons();
    return ResponseEntity.ok().body(persons);
  }
  
  @GetMapping("/search")
  public ResponseEntity<List<Person>> getPersons( @RequestParam(required = false) String name, @RequestParam(required = false) String email) {
    List<Person> persons = personService.getPersonByNameOrEmail(name, email);
    return ResponseEntity.ok().body(persons);
  }

  @PostMapping
  public ResponseEntity<Person> createPerson(@RequestBody Person person) {
    Person createdPerson = personService.createPerson(person);
    return ResponseEntity.ok(createdPerson);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Person> updatePerson(@PathVariable Long id, @RequestBody Person person) {
    Person updatedPerson = personService.updatePerson(id, person);
    return ResponseEntity.ok(updatedPerson);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
    personService.deletePersonById(id);
    return ResponseEntity.noContent().build();
  }
}
