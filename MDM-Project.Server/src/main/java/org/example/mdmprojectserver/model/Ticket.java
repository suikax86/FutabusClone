package org.example.mdmprojectserver.model;

import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "tickets")
public class Ticket {
    @Id
    public String id;
    public String busId;
    public Customer customer;
    public List<Seat> seats;
    public Double totalFare;
}
