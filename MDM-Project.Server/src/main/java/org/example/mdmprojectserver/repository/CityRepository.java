package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.entity.City;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends Neo4jRepository<City, Long> {

}