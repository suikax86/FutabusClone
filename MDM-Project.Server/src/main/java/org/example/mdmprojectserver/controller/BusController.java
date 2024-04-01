package org.example.mdmprojectserver.controller;

import jakarta.validation.Valid;
import org.example.mdmprojectserver.dto.BusDto;
import org.example.mdmprojectserver.dto.CustomerDto;
import org.example.mdmprojectserver.model.Bus;
import org.example.mdmprojectserver.model.Customer;
import org.example.mdmprojectserver.repository.BusRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/buses")
public class BusController {
    private final BusRepository busRepository;
    public BusController(BusRepository busRepository) {
        this.busRepository = busRepository;
    }

    @GetMapping()
    public List<Bus> getCustomers() {
        return this.busRepository.findAll();
    }

    @PostMapping()
    public ResponseEntity<?> newBus(@RequestBody BusDto newBusDto, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body("Validation errors: " + result.getAllErrors());
        }
        Bus bus = new Bus(newBusDto.getDepartureTime(), newBusDto.getDepartureLocation(), newBusDto.getArrivalTime(), newBusDto.getArrivalLocation(), newBusDto.getFare(), newBusDto.getBoardingPoints(), newBusDto.getDroppingPoints());
        return ResponseEntity.ok(this.busRepository.save(bus));
    }
    @DeleteMapping("/{id}")
    public void deleteBus(@PathVariable String id) {
        this.busRepository.deleteById(id);
    }
}
