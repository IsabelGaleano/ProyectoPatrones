package com.isabelgaleano.app.service;

import com.isabelgaleano.app.entity.User;
import com.isabelgaleano.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
//Rest es una arquitectura de software. Usan HTTP.
@Service
public class UserServiceImpl implements UserService{
    //Inyeccion de dependencias se puede usar el repositorio
    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)//No va a guardar nada en ña DB
    public Iterable<User> findAll() {

        return userRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<User> findAll(Pageable pageable) {

        return userRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    @Transactional
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {

        userRepository.deleteById(id);
    }
}
