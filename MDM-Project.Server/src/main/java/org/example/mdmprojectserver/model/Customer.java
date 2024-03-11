package org.example.mdmprojectserver.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import org.example.mdmprojectserver.model.enums.Gender;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "customers")
public class Customer {
    @Id
    public String id;
    @NotEmpty(message = "Name must not be empty")
    public String name;
    public Gender gender;
    @Email(message = "Email should be valid")

    public String email;

    @Indexed(unique = true)
    @Pattern(regexp = "^(0|\\+84)\\d{9}$", message = "Invalid phone number, phone number must start with 0 or +84, followed by exactly 9 digits")
    public String phone;

    public void setName(String name) {
        this.name = name;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        String regex = "^(0|\\+84)\\d{9}$";
        if (!phone.matches(regex)) {
            throw new IllegalArgumentException("Invalid phone number, phone number must start with 0 or +84, followed by exactly 9 digits");
        }
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Gender getGender() {
        return gender;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public Customer(String name, Gender gender, String email, String phone) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
    }

    public Customer() {
    }

    @Override
    public String toString() {
        return String.format("Customer[id=%s, name=%s,gender=%s, email=%s, phone=%s]", id, name,gender,email,phone);
    }

}
