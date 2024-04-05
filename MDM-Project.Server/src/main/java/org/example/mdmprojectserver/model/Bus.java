package org.example.mdmprojectserver.model;

import lombok.Data;
import org.example.mdmprojectserver.model.enums.BusType;
import org.example.mdmprojectserver.model.enums.DepartureTimeType;
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
    public LocalDateTime departureTime;
    public String departureLocation;
    public DepartureTimeType departureTimeType;
    public LocalDateTime arrivalTime;
    public String arrivalLocation;
    public Double fare;
    public List<String> boardingPoints;
    public List<String> droppingPoints;
    public BusType busType;


    public Bus(String departureTime, String departureLocation,
               String arrivalTime, String arrivalLocation, Double fare,
               List<String> boardingPoints, List<String> droppingPoints, BusType busType) {
        //Format the date time to a specific format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd:HH:mm");
        this.departureTime = LocalDateTime.parse(departureTime, formatter);
        setDepartureTimeType();
        this.departureLocation = departureLocation;
        this.arrivalTime = LocalDateTime.parse(arrivalTime, formatter);
        this.arrivalLocation = arrivalLocation;
        this.fare = fare;
        this.boardingPoints = boardingPoints;
        this.droppingPoints = droppingPoints;
        this.busType = busType;
    }

    public void setDepartureTimeType() {
        int hour = this.departureTime.getHour();
        if (hour < 6) {
            this.departureTimeType = DepartureTimeType.EARLY_MORNING;
        } else if (hour < 12) {
            this.departureTimeType = DepartureTimeType.MORNING;
        } else if (hour < 18) {
            this.departureTimeType = DepartureTimeType.AFTERNOON;
        } else {
            this.departureTimeType = DepartureTimeType.NIGHT;
        }
    }
}
