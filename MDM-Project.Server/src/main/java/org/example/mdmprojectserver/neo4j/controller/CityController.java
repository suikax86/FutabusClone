package org.example.mdmprojectserver.neo4j.controller;

import org.example.mdmprojectserver.neo4j.node.City;
import org.example.mdmprojectserver.neo4j.repository.CityRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/city")
public class CityController {
    private final CityRepository cityRepository;

    public CityController(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @GetMapping("/")
    public List<City> getCity() {
        return cityRepository.findAll();
    }
}
