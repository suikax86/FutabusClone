package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.model.Mongodb.Bus;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BusRepository extends MongoRepository<Bus, String> {
    boolean existsById(String id);
}
