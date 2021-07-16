package com.isabelgaleano.app.controller;

import com.isabelgaleano.app.entity.User;
import com.isabelgaleano.app.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

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

    //Update and user
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody User userDatails, @PathVariable(value = "id")Long userId) {
        Optional<User> user = userService.findById(userId);
        if (!user.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        /*
         BeanUtils.copyProperties(userDatails, user.get());
         Copia el objeto en userdetails en el objeto que tenemos en la base de datos
        * */

        user.get().setName(userDatails.getName());
        user.get().setSurname(userDatails.getSurname());
        user.get().setEmail(userDatails.getEmail());
        user.get().setEnabled(userDatails.getEnabled());

        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user.get()));
    }

    //Delete and User
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable(value = "id") Long userId) {
        if (!userService.findById(userId).isPresent()){
            return ResponseEntity.notFound().build();
        }
        userService.deleteById(userId);
        return ResponseEntity.ok().build();
    }

    //Read all Users
    @GetMapping
    public List<User> readAll() {
        List<User> users = StreamSupport
                .stream(userService.findAll().spliterator(),false) //Recorre el iterable y lo pasa a una lista
                .collect(Collectors.toList());

        return users;
    }

}
