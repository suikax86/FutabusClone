package org.example.mdmprojectserver.controller;

import org.example.mdmprojectserver.dto.BusDto;
import org.example.mdmprojectserver.model.Bus;
import org.example.mdmprojectserver.model.Seat;
import org.example.mdmprojectserver.repository.BusRepository;
import org.example.mdmprojectserver.repository.SeatRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import java.util.List;

@RestController
@RequestMapping("/api/buses")
public class BusController {
    private final BusRepository busRepository;
    private final SeatRepository seatRepository;
    public BusController(BusRepository busRepository, SeatRepository seatRepository) {
        this.busRepository = busRepository;
        this.seatRepository = seatRepository;
    }

    @GetMapping("/")
    public List<Bus> getBuses() {
        return this.busRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBus(@PathVariable String id) {
        return ResponseEntity.ok(this.busRepository.findById(id));
    }

    @PostMapping("/")
    public ResponseEntity<?> newBus(@RequestBody BusDto newBusDto, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body("Validation errors: " + result.getAllErrors());
        }
        //Format the date time to a specific format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd:HH:mm");
        LocalDateTime departureTime = LocalDateTime.parse(newBusDto.getDepartureTime(), formatter);
        LocalDateTime arrivalTime = LocalDateTime.parse(newBusDto.getArrivalTime(), formatter);

        Bus bus = new Bus(departureTime, newBusDto.getDepartureLocation(), arrivalTime, newBusDto.getArrivalLocation(), newBusDto.getFare(), newBusDto.getBoardingPoints(), newBusDto.getDroppingPoints(), newBusDto.getBusType());
        seatRepository.saveAll(bus.getSeats());

        Bus savedBus = this.busRepository.save(bus);

        for (Seat seat : savedBus.getSeats()) {
            seat.setBusId(savedBus.getId());
            seatRepository.save(seat);
        }

        return ResponseEntity.ok(savedBus);
    }
    @DeleteMapping("/{id}")
    public void deleteBus(@PathVariable String id) {
        this.busRepository.deleteById(id);
    }
}
