package org.example.mdmprojectserver;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.example.mdmprojectserver.jpa.model.Role;
import org.example.mdmprojectserver.jpa.repository.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

//TODO: Buses: embedded seats, ticket
//TODO: Handle output of exception in controller
//TODO: Handle validate of phoneNumber
//TODO: Handle authentication api

@SpringBootApplication

@EnableJpaRepositories(
        basePackages = "org.example.mdmprojectserver.jpa.repository",
        excludeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = "org\\.example\\.mdmprojectserver\\.(mongodb|neo4j|redis)\\.repository\\..*")
)

@EnableRedisRepositories(
        basePackages = "org.example.mdmprojectserver.redis.repository",
        excludeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = "org\\.example\\.mdmprojectserver\\.(jpa|mongodb|neo4j)\\.repository\\..*")
)

@EnableMongoRepositories(
        basePackages = "org.example.mdmprojectserver.mongodb.repository",
        excludeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = "org\\.example\\.mdmprojectserver\\.(jpa|neo4j|redis)\\.repository\\..*")
)

@EnableNeo4jRepositories(
        basePackages = "org.example.mdmprojectserver.neo4j.repository",
        excludeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = "org\\.example\\.mdmprojectserver\\.(jpa|mongodb|redis)\\.repository\\..*")
)


@OpenAPIDefinition(info = @Info(title = "MDM Project API", version = "1.0", description = "MDM Project API"))
public class Application implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(Application.class);
    private final RoleRepository roleRepository;

    public Application(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;

    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) {

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
