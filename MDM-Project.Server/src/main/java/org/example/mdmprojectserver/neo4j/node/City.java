package org.example.mdmprojectserver.neo4j.node;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

@Node("City")
public class City {

    @Id
    @GeneratedValue
    private Long cityId;
    private String cityName;
    private String zipcode;


    public City() {
    }

    public City(String cityName, String zipcode) {
        this.cityName = cityName;
        this.zipcode = zipcode;
    }

    public Long getCityId() {
        return cityId;
    }

    public void setCityId(Long cityId) {
        this.cityId = cityId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }
}
