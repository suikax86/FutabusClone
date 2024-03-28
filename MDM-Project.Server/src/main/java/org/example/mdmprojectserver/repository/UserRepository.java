package org.example.mdmprojectserver.repository;

import org.example.mdmprojectserver.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByPhoneNumber(String username);
    Boolean existsByPhoneNumber(String username);
}
