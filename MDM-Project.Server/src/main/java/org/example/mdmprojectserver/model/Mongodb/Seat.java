package org.example.mdmprojectserver.model.Mongodb;

import org.springframework.data.annotation.Id;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "seats")
public class Seat {
    @Id
    public String id;
    public String busId;
    public String seatNumber;
    public Boolean isBooked;


    public Seat(String seatNumber) {
        this.seatNumber = seatNumber;
        this.isBooked = false;
    }
}
