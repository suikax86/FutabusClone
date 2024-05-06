package org.example.mdmprojectserver;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.example.mdmprojectserver.model.RDBMS.Role;
import org.example.mdmprojectserver.repository.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.MongoTemplate;

//TODO: Buses: embedded seats, ticket
//TODO: Handle output of exception in controller
//TODO: Handle validate of phoneNumber
//TODO: Handle authentication api

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "MDM Project API", version = "1.0", description = "MDM Project API"))
public class Application implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(Application.class);

    public Application() {

    }


    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) {
        logger.info("Hello, World!");



    }
}
