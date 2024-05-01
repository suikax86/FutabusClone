package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.model.Bus;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDateTime;
import java.util.Optional;

public interface BusRepository extends MongoRepository<Bus, String> {
    boolean existsById(String id);
}
