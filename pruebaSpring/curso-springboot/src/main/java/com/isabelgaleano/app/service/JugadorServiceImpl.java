package com.isabelgaleano.app.service;

import com.isabelgaleano.app.api.JugadorObject;
import com.isabelgaleano.app.repository.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Service
public class JugadorServiceImpl implements JugadorService{
    @Autowired
    private JugadorRepository jugadorRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<JugadorObject> findAll() {
        return jugadorRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<JugadorObject> findAll(Pageable pageable) {
        return jugadorRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<JugadorObject> findByAlias(String alias) {
        return jugadorRepository.findById(alias);
    }

    @Override
    public JugadorObject save(JugadorObject jugadorObject) {
        return jugadorRepository.save(jugadorObject);
    }

    @Override
    public void deleteByAlias(String alias) {
        jugadorRepository.deleteById(alias);
    }
}
