package com.example.user.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/getUser")
    public ResponseEntity<List<User>> getUsers(){
        List<User> L = userService.getUsers();
        if (L.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else{
            return new ResponseEntity<>(L, HttpStatus.OK);
        }
    }

    @GetMapping(value = "/getOneUser/{id}")
    public Optional<User> getOneUser(@PathVariable Long id){
        return userService.getOneUser(id);
    }


    @PostMapping(value = "/postUser")
    public void postUser(@RequestBody User u){
        userService.postNewUser(u);
    }

    @DeleteMapping(value = "/deleteUser/{id}")
    public void deleteUser(@PathVariable Long  id){
        userService.deleteAnUser(id);
    }

    @PutMapping(value="/updateUser/{id}")
    public void updateUser(@PathVariable Long id, @RequestBody User user){
        userService.updateAnUser(id, user);
    }
}
