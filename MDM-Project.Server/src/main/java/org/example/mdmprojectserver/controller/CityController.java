package org.example.mdmprojectserver.controller;

import org.example.mdmprojectserver.entity.City;
import org.example.mdmprojectserver.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CityController {

    private final CityService cityService;

    @Autowired
    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping("/getAllCity")
    public List<City> getAllCities() {
        return cityService.getAllCities();
    }
}
