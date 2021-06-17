package com.isabelgaleano.app.repository;
import com.isabelgaleano.app.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//Todos los metodos del crud
//CrudRepository es para cruds simples. Pero si se requiere paginacion desde el lado del servidor y va a tardar mucho
public interface UserRepository extends JpaRepository<User, Long> {


}
