package org.example.mdmprojectserver.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class BusDto {
    public String departureTime;
    public String departureLocation;
    public String arrivalTime;
    public String arrivalLocation;
    public Double fare;
    public List<String> boardingPoints;
    public List<String> droppingPoints;
}
