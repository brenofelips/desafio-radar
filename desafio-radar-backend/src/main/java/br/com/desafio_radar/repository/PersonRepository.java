package br.com.desafio_radar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.desafio_radar.entities.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
  List<Person> findByName(String name);
  List<Person> findByEmail(String email);
}
