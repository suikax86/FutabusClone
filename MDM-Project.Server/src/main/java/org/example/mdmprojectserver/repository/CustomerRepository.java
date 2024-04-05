package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface CustomerRepository extends MongoRepository<Customer,String> {
    @Override
    Optional<Customer> findById(String s);
}
