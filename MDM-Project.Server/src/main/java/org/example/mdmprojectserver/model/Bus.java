package org.example.mdmprojectserver.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Data
@Document(collection = "buses")
public class Bus {
    @Id
    public String id;
    public String departureTime;
    public String departureLocation;
    public String arrivalTime;
    public String arrivalLocation;
    public Double fare;
    public List<String> boardingPoints;
    public List<String> droppingPoints;

    public Bus() {
    }

    public Bus(String departureTime, String departureLocation, String arrivalTime, String arrivalLocation, Double fare, List<String> boardingPoints, List<String> droppingPoints) {
        //Format the date time to a specific format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd:HH:mm");
        this.departureTime = LocalDateTime.parse(departureTime, formatter).toString();;
        this.departureLocation = departureLocation;
        this.arrivalTime = LocalDateTime.parse(arrivalTime, formatter).toString();
        this.arrivalLocation = arrivalLocation;
        this.fare = fare;
        this.boardingPoints = boardingPoints;
        this.droppingPoints = droppingPoints;
    }
}
