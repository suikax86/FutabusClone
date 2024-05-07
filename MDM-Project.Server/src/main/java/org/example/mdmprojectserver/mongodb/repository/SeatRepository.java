package org.example.mdmprojectserver.mongodb.repository;

import org.example.mdmprojectserver.mongodb.model.Seat;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SeatRepository extends MongoRepository<Seat, String> {
}
