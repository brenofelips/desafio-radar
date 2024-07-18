package br.com.desafio_radar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.desafio_radar.entities.Person;
import br.com.desafio_radar.exception.ResourceNotFoundException;
import br.com.desafio_radar.repository.PersonRepository;

@Service
public class PersonService {
  @Autowired
  PersonRepository personRepository;

  public List<Person> getAllPersons() {
      return personRepository.findAll();
    }

    public List<Person> getPersonByNameOrEmail(String name, String email) {
        return name != null && !name.isEmpty() ? personRepository.findByName(name) : personRepository.findByEmail(email);
      }

    public Person createPerson(Person person) {
        return personRepository.save(person);
    }

    public Person updatePerson(Long id, Person personDetails) {
      Person person = personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Person not found with id " + id));

      person.setName(personDetails.getName());
      person.setGender(personDetails.getGender());
      person.setBirthDate(personDetails.getBirthDate());
      person.setPhone(personDetails.getPhone());
      person.setEmail(personDetails.getEmail());

      return personRepository.save(person);
  }

  public void deletePersonById(Long id) {
    Person person = personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Person not found with id " + id));
    personRepository.delete(person);
}
}
