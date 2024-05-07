package org.example.mdmprojectserver.redis.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.mdmprojectserver.mongodb.model.Bus;
import org.example.mdmprojectserver.mongodb.model.Seat;
import org.example.mdmprojectserver.mongodb.model.Ticket;
import org.example.mdmprojectserver.mongodb.repository.BusRepository;
import org.example.mdmprojectserver.mongodb.repository.TicketRepository;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
public class BookingService {
    private StringRedisTemplate redisTemplate;
    private TicketRepository ticketRepository;
    private BusRepository busRepository;

    public BookingService(StringRedisTemplate redisTemplate, TicketRepository ticketRepository, BusRepository busRepository) {
        this.redisTemplate = redisTemplate;
        this.ticketRepository = ticketRepository;
        this.busRepository = busRepository;
    }


    public void bookTicket(Ticket ticket) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        String ticketJson = objectMapper.writeValueAsString(ticket);

        String key = ticket.getBusId() + ":" + ticket.getCustomerId();
        ValueOperations<String, String> ops = redisTemplate.opsForValue();
        ops.set(key, ticketJson, 20, TimeUnit.SECONDS);

        // Update the "seats" information on "buses" in MongoDB
        Bus bus = busRepository.findById(ticket.getBusId()).orElseThrow(() -> new Exception("Bus not found"));
        List<Seat> originalSeats = new ArrayList<>();
        bus.getSeats().forEach(seat -> {
            if (ticket.getSeats().contains(seat.getSeatNumber())) {
                originalSeats.add(seat);
                seat.setIsBooked(true);
                seat.setCustomerId(ticket.getCustomerId());
            }
        });

        busRepository.save(bus);

    }

    public Ticket getTicket(String busId, String customerId) throws Exception {
        String key = busId + ":" + customerId;
        ValueOperations<String, String> ops = redisTemplate.opsForValue();
        String ticketJson = ops.get(key);

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(ticketJson, Ticket.class);
    }

    public void confirmBooking(String busId, String customerId) throws Exception {
        Ticket ticket = getTicket(busId, customerId);
        if (ticket != null) {
            // Store the booking information in MongoDB
            ticketRepository.save(ticket);
            // Remove the key from Redis
            redisTemplate.delete(busId + ":" + customerId);
        }
    }

}
