package org.example.mdmprojectserver.service;

import org.example.mdmprojectserver.entity.City;
import org.example.mdmprojectserver.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CityService {

    @Autowired
    CityRepository cityRepository;

    public List<City> getAllCities() {
        return cityRepository.findAll();
    }
}
