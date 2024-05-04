package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.model.Mongodb.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TicketRepository extends MongoRepository<Ticket, String>{
}
