package org.example.mdmprojectserver.neo4j.repository;

import org.example.mdmprojectserver.neo4j.node.City;
import org.springframework.data.neo4j.repository.Neo4jRepository;


public interface CityRepository extends Neo4jRepository<City, Long> {

}
