package org.example.mdmprojectserver.controller;

import jakarta.validation.Valid;
import org.example.mdmprojectserver.dto.CustomerDto;
import org.example.mdmprojectserver.model.Customer;
import org.example.mdmprojectserver.repository.CustomerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@Validated
public class CustomerController {
    private final CustomerRepository customerRepository;
    public CustomerController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @GetMapping()
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @PostMapping()
    public ResponseEntity<?> newCustomer(@Valid @RequestBody CustomerDto newCustomerDto, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body("Validation errors: " + result.getAllErrors());
        }
        Customer customer = new Customer(newCustomerDto.getName(), newCustomerDto.getGender(), newCustomerDto.getEmail(),newCustomerDto.getPhone());
        return ResponseEntity.ok(customerRepository.save(customer));
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable String id) {
        customerRepository.deleteById(id);
    }
}
