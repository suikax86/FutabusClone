package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.model.Seat;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SeatRepository extends MongoRepository<Seat, String> {
}
