package org.example.mdmprojectserver.dto;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class RegisterDto {
    @Pattern(regexp = "^(\\+84|0)\\d{9}$", message = "Invalid phone number")
    private String phoneNumber;
    private String password;
    private String email;
    private String name;
}
