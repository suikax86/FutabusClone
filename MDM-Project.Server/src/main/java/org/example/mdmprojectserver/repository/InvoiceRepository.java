package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.model.Mongodb.Invoice;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface InvoiceRepository extends MongoRepository<Invoice, String> {
    Optional<Invoice> findById(String invoiceID);
    Optional<Invoice> findByPhoneAndInvoiceID(String phone, String invoiceID);
    void deleteById(String invoiceID);
}
