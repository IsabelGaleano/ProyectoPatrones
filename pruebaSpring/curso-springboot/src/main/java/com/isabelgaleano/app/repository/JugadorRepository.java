package com.isabelgaleano.app.repository;

import com.isabelgaleano.app.proxy.api.JugadorObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JugadorRepository extends JpaRepository<JugadorObject, String> {
}
