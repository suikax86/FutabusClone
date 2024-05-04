package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.model.Mongodb.Bus;
import org.example.mdmprojectserver.model.Mongodb.Invoice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BusRepository extends MongoRepository<Bus, String> {
    boolean existsById(String id);
    Optional<Bus> findById(String invoiceID);

}
