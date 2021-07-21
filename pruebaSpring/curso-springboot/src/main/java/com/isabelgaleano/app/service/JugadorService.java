package com.isabelgaleano.app.service;

import com.isabelgaleano.app.entity.User;
import com.isabelgaleano.app.proxy.api.JugadorObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface JugadorService {

    public Iterable<JugadorObject> findAll();

    public Page<JugadorObject> findAll(Pageable pageable);

    public Optional<JugadorObject> findByAlias(String alias);

    public JugadorObject save(JugadorObject jugadorObject);

    public void deleteByAlias(String alias);
}
