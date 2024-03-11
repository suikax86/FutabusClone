package org.example.mdmprojectserver.controller;

import jakarta.validation.Valid;
import org.example.mdmprojectserver.model.Customer;
import org.example.mdmprojectserver.repository.CustomerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Validated
public class CustomerController {
    private final CustomerRepository customerRepository;
    public CustomerController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @GetMapping("/customers")
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @PostMapping("/customers")
    public ResponseEntity<?> newCustomer(@Valid @RequestBody Customer newCustomer, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body("Validation errors: " + result.getAllErrors());
        }
        Customer customer = new Customer(newCustomer.getName(), newCustomer.getGender(), newCustomer.getEmail(),newCustomer.getPhone());
        return ResponseEntity.ok(customerRepository.save(customer));
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable String id) {
        customerRepository.deleteById(id);
    }
}
