package com.isabelgaleano.app.entity;
import javax.persistence.*;
import javax.persistence.Table;
import java.io.Serializable;


//Le dice que esta clase es una entidad
@Entity
@Table(name = "users")
public class User implements Serializable {
    private static final long serialVersionUID = -6801690473848135418L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50)
    private String name;

    private String surname;

    @Column(name = "mail", nullable = false, length = 50, unique = true)
    private String email;

    private Boolean enabled;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
}
