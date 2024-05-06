package org.example.mdmprojectserver.redis.controller;

import org.example.mdmprojectserver.dto.TicketDto;
import org.example.mdmprojectserver.mongodb.model.Ticket;
import org.example.mdmprojectserver.redis.service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/booking")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/book")
    public ResponseEntity<String> bookTicket(@RequestBody TicketDto ticketDto) {
        try {
            Ticket ticket = new Ticket(ticketDto.getBusId(), ticketDto.getCustomerId(), ticketDto.getSeats(), ticketDto.getTotalFare());
            bookingService.bookTicket(ticket);
            return ResponseEntity.ok("Ticket booked successfully. Please pay within 20 minutes to confirm your booking.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error booking ticket: " + e.getMessage());
        }
    }

    @PostMapping("/confirm")
    public ResponseEntity<String> confirmBooking(@RequestParam String busId, @RequestParam String customerId) {
        try {
            bookingService.confirmBooking(busId, customerId);
            return ResponseEntity.ok("Booking confirmed successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error confirming booking: " + e.getMessage());
        }
    }
}
