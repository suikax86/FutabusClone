package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.model.RDBMS.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer>{
    Optional<Role> findByName(String name);
}
