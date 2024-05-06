# Bus Ticket Booking Project 

- This project is designed to facilitate bus ticket booking using a combination of relational database management systems (RDBMS) and various NoSQL databases like MongoDB, Redis, and Neo4J. 
- The server-side is implemented in Java using Spring Boot, while the client-side utilizes JavaScript with React.


## Prerequisites
Ensure you have the following software installed before setting up and running the project:
- Java 21 and Maven
- Node.js and npm
- Docker


## Building and Running the Project Locally
### Client
1. Navigate to the `MDM-Project.Client` directory.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the client.
### Server
#### Setting up and Running Databases with Docker
Before running the project, you need to install and start the database management systems (DBMS) and NoSQL databases using Docker.

##### (RDBMS) - PostgreSQL 
Start PostgreSQL using Docker with the following command:
```docker
docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```
Then access PostgreSQL using PgAdmin or pgclid and create a database named `FutabusClone`
##### MongoDB
Run MongoDB using Docker with the following command:
```docker
docker run -d -p 27017:27017 --name mongo -e MONGO_INITDB_ROOT_USERNAME=mongo -e MONGO_INITDB_ROOT_PASSWORD=mongo mongodb/mongodb-community-server:latest
```
##### Redis
Run Redis using Docker with the following command:
```docker
docker pull redis:latest
docker network create -d bridge redisnet
docker run -d -p 6379:6379 --name redis --network redisnet redis
```
To access the Redis CLI
```docker
docker exec -it redis redis-cli
```

##### Neo4J
Run Neo4J using Docker with the following command:
```docker
docker run --publish=7474:7474 --publish=7687:7687 --volume=$HOME/neo4j/data:/data --env NEO4J_AUTH=neo4j/password neo4j
```

#### Running the Server    
1. Navigate to the `MDM-Project.Server` directory.
2. The server can be launched using: `./mvnw spring-boot:run`

The server will be running at `http://localhost:8080`, you can access swagger-ui at `http://localhost:8080/swagger-ui/index.html`, and the client will be running at `http://localhost:5173`.

## Building and Running the Project with Docker
### Client
1. Navigate to the `MDM-Project.Client` directory.
2. Run `docker build -t sukaix86/mdm-project-client .` to build the Docker image.
3. Run `docker run -p 5173:5173 sukaix86/mdm-project-client` to start the container.

### Server
1. Navigate to the `MDM-Project.Server` directory.
2. Run `docker-compose build` to build the Docker images.
3. Run `docker-compose up` to start the containers.

The server will be running at `http://localhost:8080`, the client will be running at `http://localhost:5173`, and the databases will be running at their default ports.
