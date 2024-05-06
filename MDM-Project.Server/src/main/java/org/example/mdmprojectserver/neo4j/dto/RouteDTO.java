package org.example.mdmprojectserver.neo4j.dto;

import lombok.Data;

@Data
public class RouteDTO {
    private String startCity;
    private String endCity;
    private Long distance;
    private Long time;
    private Long numberOfPeople;

}
