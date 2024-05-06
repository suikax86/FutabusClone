package org.example.mdmprojectserver.jpa.repository;

import org.example.mdmprojectserver.jpa.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByPhoneNumber(String username);
    Boolean existsByPhoneNumber(String username);
}
