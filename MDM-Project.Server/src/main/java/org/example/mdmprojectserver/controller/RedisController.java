package org.example.mdmprojectserver.controller;

import org.example.mdmprojectserver.dto.BusDto;
import org.example.mdmprojectserver.model.Mongodb.Bus;
import org.example.mdmprojectserver.model.Mongodb.Seat;
import org.example.mdmprojectserver.model.enums.BusType;
import org.example.mdmprojectserver.model.enums.SortType;
import org.example.mdmprojectserver.model.enums.TimeType;
import org.example.mdmprojectserver.repository.BusRepository;
import org.example.mdmprojectserver.repository.SeatRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/redis")
@EnableCaching
public class RedisController {
    private final BusRepository busRepository;
    private final SeatRepository seatRepository;

    public RedisController(BusRepository busRepository, SeatRepository seatRepository) {
        this.busRepository = busRepository;
        this.seatRepository = seatRepository;
    }

    @GetMapping("/")
    public List<Bus> getBuses() {
        return this.busRepository.findAll();
    }

    @Cacheable(key = "#id",value = "Bus")
    @GetMapping("/{id}")
    public Bus getBus(@PathVariable String id) {
        Bus bus = this.busRepository.findById(id).orElse(null);
        if (bus == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Bus not found");
        } else {
            return bus;
        }
    }

    @GetMapping("/search")
    public List<Bus> searchBuses(@RequestParam String departureLocation, @RequestParam String arrivalLocation,
                                 @RequestParam String departureTime,
                                 @RequestParam(required = false) SortType sortByFare, @RequestParam(required = false) SortType sortByDepartureTime,
                                 @RequestParam(required = false) BusType busType, @RequestParam(required = false) TimeType timeType){
        // Parse the departureTime to LocalDate
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate departureDate = LocalDate.parse(departureTime, formatter);

        // Find buses that match the departureLocation, arrivalLocation, and departureDate
        List<Bus> buses = busRepository.findAll().stream()
                .filter(bus -> bus.getDepartureLocation().equals(departureLocation) &&
                        bus.getArrivalLocation().equals(arrivalLocation)
                        && bus.getDepartureTime().toLocalDate().equals(departureDate)
                )
                .collect(Collectors.toList());

        // Sort the results based on fare
        if (sortByFare != null) {
            if (sortByFare == SortType.ASCENDING) {
                buses = buses.stream().sorted(Comparator.comparingDouble(Bus::getFare)).collect(Collectors.toList());
            } else if (sortByFare == SortType.DESCENDING) {
                buses = buses.stream().sorted(Comparator.comparingDouble(Bus::getFare).reversed()).collect(Collectors.toList());
            }
        }

        // Sort the results based on departureTime
        if (sortByDepartureTime != null) {
            if (sortByDepartureTime == SortType.ASCENDING) {
                buses = buses.stream().sorted(Comparator.comparing(Bus::getDepartureTime)).collect(Collectors.toList());
            } else if (sortByDepartureTime == SortType.DESCENDING) {
                buses = buses.stream().sorted(Comparator.comparing(Bus::getDepartureTime).reversed()).collect(Collectors.toList());
            }
        }

        // Filter the results based on busType
        if (busType != null) {
            buses = buses.stream().filter(bus -> bus.getBusType() == busType).collect(Collectors.toList());
        }

        // Filter the results based on timeType
        if (timeType != null) {
            buses = buses.stream().filter(bus -> bus.getTimeType() == timeType).collect(Collectors.toList());
        }

        return buses;
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

        return ResponseEntity.ok(this.busRepository.save(bus));
    }

    @CacheEvict(key = "#id",value = "Bus")
    @DeleteMapping("/{id}")
    public void deleteBus(@PathVariable String id) {
        this.busRepository.deleteById(id);
    }



}
