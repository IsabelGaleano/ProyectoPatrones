package com.isabelgaleano.app.controller;

import com.isabelgaleano.app.entity.User;
import com.isabelgaleano.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired//Lo inyecta
    private UserService userService;

    // Create a new user
    @PostMapping
    @CrossOrigin
    //Del body para a recibir un usuario. Va a recibir en el cuerpo de esa peticion y se va a guardar y devolverlo
    // y un codigo de estado que es el 201. De que se ha creado.
    public ResponseEntity<?> create (@RequestBody User user) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user));
    }

    //Read an user
    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<?> read(@PathVariable(value = "id") Long userId) {
        Optional<User> optionalUser = userService.findById(userId);
        if (!optionalUser.isPresent()) {
            return ResponseEntity.notFound().build();
            //Not found devuelve un codigo de estado. en caso de que no lo encuentre
        }

        return ResponseEntity.ok(optionalUser); //Si ha encontrado el usuario. el codigo de estado y el usuario
    }

}
