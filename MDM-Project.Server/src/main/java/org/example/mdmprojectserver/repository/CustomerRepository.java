package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer,String> {
}
