package org.example.mdmprojectserver.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.example.mdmprojectserver.model.enums.BusType;
import org.example.mdmprojectserver.model.enums.DepartureTimeType;

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
    public BusType busType;


}
