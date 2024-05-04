package org.example.mdmprojectserver.dto;
import lombok.Data;
import java.util.List;

@Data
public class TicketDto {
    public String busId;
    public String customerId;
    public List<String> seats;
    public Double totalFare;
}
