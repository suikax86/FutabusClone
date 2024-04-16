package org.example.mdmprojectserver;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.example.mdmprojectserver.model.Role;
import org.example.mdmprojectserver.repository.RoleRepository;
import org.neo4j.driver.*;
import org.neo4j.driver.exceptions.ClientException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.beans.factory.annotation.Value;


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

    @Autowired
    private MongoTemplate mongoTemplate;
    private static final Logger logger = LoggerFactory.getLogger(Application.class);

    @Value("${spring.neo4j.uri}")
    private String dbUri;

    @Value("${spring.neo4j.authentication.username}")
    private String dbUser;

    @Value("${spring.neo4j.authentication.password}")
    private String dbPassword;

    @Value("${spring.data.neo4j.database}")
    private String dbName;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("Hello, World!");

        for (String collectionName : mongoTemplate.getCollectionNames()) {
            mongoTemplate.dropCollection(collectionName);
            logger.info("Xóa tất cả dữ liệu trong bảng " + collectionName + " trong mongodb thành công!");
        }

        //Insert sample data
        if(roleRepository.count() == 0) {
            Role role1 = new Role(1,"USER");
            Role role2 = new Role(2,"ADMIN");
            roleRepository.save(role1);
            roleRepository.save(role2);
            logger.info("Thêm dữ liệu mẫu vào bảng roles trong postgresql thành công!");
        }

        //Test lấy data tu Neo4j
        try (Driver driver = GraphDatabase.driver(dbUri, AuthTokens.basic(dbUser, dbPassword));
             Session session = driver.session(SessionConfig.forDatabase(dbName))) {

            String cypherQ = "MATCH (s:Student)\n" +
                    "WHERE toLower(s.address) = 'tp hcm'\n" +
                    "RETURN s.firstName + ' ' + s.lastName AS hoTen, s.address, s.gender, s.birthYear\n" +
                    "ORDER BY s.lastName DESC";

            Result result = session.run(cypherQ);

            while (result.hasNext()) {
                System.out.println(result.next().get("hoTen"));
            }

        } catch (ClientException e) {
            System.err.println("Client Exception: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Exception: " + e.getMessage());
        }
    }
}

