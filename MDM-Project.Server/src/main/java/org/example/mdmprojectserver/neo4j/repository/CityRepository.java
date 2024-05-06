package org.example.mdmprojectserver.neo4j.repository;

import org.example.mdmprojectserver.neo4j.dto.RouteDTO;
import org.example.mdmprojectserver.neo4j.node.City;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;

import java.util.List;


public interface CityRepository extends Neo4jRepository<City, Long> {
    @Query("MATCH (p:Person)-[:MADE_TRIP]->(trip:Trip)-[:FROM]->(start:City)-[:TO]->(end:City) " +
            "WITH start, end, COUNT(DISTINCT p) AS numberOfPeople " +
            "ORDER BY numberOfPeople DESC " +
            "LIMIT 1 " +
            "RETURN start.cityName AS startCity, end.cityName AS endCity, numberOfPeople")
    List<RouteDTO> findMostPopularRoute();
}
