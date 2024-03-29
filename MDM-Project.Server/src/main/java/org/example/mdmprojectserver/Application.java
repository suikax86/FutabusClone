package org.example.mdmprojectserver;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.example.mdmprojectserver.model.Role;
import org.example.mdmprojectserver.repository.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//TODO: UserEntity&Customer mapping
//TODO: Buses: embedded seats, ticket
//TODO: Buses: implement api find bus by departureLocation, arrivalLocation, departureTime
//TODO: Sort by fire, sort by departureTime
//TODO: Handle output of exception in controller
//TODO: Handle validate of phoneNumber
//TODO: Handle authentication api

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "MDM Project API", version = "1.0", description = "MDM Project API"))
public class Application implements CommandLineRunner {
    @Autowired
    private RoleRepository roleRepository;
    private static final Logger logger = LoggerFactory.getLogger(Application.class);



    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("Hello, World!");

        //Insert sample data
        if(roleRepository.count() == 0) {
            Role role1 = new Role(1,"USER");
            Role role2 = new Role(2,"ADMIN");
            roleRepository.save(role1);
            roleRepository.save(role2);
            logger.info("Thêm dữ liệu mẫu vào bảng roles trong postgresql thành công!");

        }
    }
}
