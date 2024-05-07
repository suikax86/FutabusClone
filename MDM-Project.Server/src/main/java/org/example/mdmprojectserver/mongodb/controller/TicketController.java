package org.example.mdmprojectserver.mongodb.controller;

import jakarta.validation.Valid;
import org.example.mdmprojectserver.mongodb.dto.TicketDto;
import org.example.mdmprojectserver.mongodb.model.Ticket;
import org.example.mdmprojectserver.mongodb.repository.TicketRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
@Validated
public class TicketController {
    private final TicketRepository ticketRepositoryRepository;
    public TicketController(TicketRepository ticketRepositoryRepository) {
        this.ticketRepositoryRepository = ticketRepositoryRepository;
    }

    @GetMapping("/")
    public List<Ticket> getTickets() {
        return ticketRepositoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCustomer(@PathVariable String id) {
        return ResponseEntity.ok(ticketRepositoryRepository.findById(id));
    }


    @PostMapping()
    public ResponseEntity<?> newTicket(@Valid @RequestBody TicketDto newTicketDto, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body("Validation errors: " + result.getAllErrors());
        }
        Ticket ticket = new Ticket(newTicketDto.getBusId(), newTicketDto.getCustomerId(), newTicketDto.getSeats(), newTicketDto.getTotalFare());
        return ResponseEntity.ok(ticketRepositoryRepository.save(ticket));
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable String id) {
        ticketRepositoryRepository.deleteById(id);
    }
}
