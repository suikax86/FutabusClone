package org.example.mdmprojectserver.mongodb.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Data;
import org.example.mdmprojectserver.mongodb.enums.Gender;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@Document(collection = "customers")
public class Customer {
    @Id
    public String id;
    @NotEmpty(message = "Name must not be empty")
    public String name;
    public Gender gender = Gender.MALE;
    @Email(message = "Email should be valid")
    public String email;

    @Indexed(unique = true)
    @Pattern(regexp = "^(0|\\+84)\\d{9}$", message = "Invalid phone number, phone number must start with 0 or +84, followed by exactly 9 digits")
    public String phone;

    public String address;
    public String job;
    public String userEntityId;
    public Customer() {
    }

    public Customer(String name) {
        this.name = name;
    }

    public Customer(String name, Gender gender, String email, String phone, String address, String job) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.job = job;
    }

    public void setPhone(String phone) {
        String regex = "^(0|\\+84)\\d{9}$";
        if (!phone.matches(regex)) {
            throw new IllegalArgumentException("Invalid phone number, phone number must start with 0 or +84, followed by exactly 9 digits");
        }
        this.phone = phone;
    }
}
