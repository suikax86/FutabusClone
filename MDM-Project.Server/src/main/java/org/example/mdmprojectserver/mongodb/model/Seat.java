package org.example.mdmprojectserver.mongodb.model;

import org.springframework.data.annotation.Id;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Data
@Document(collection = "seats")
public class Seat implements Serializable {
    @Id
    public String id;
    public String busId;
    public String seatNumber;
    public Boolean isBooked;
    public String customerId;


    public Seat(String seatNumber) {
        this.seatNumber = seatNumber;
        this.isBooked = false;
    }

    public void bookSeat(String customerId) {
        this.isBooked = true;
        this.customerId = customerId;
    }
}
