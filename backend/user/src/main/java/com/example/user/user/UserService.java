package com.example.user.user;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public void postNewUser(User u) {
        List<String> listEmail =  userRepository.findUserByEmail(u.getEmail());
        if(!listEmail.isEmpty()){
            throw new IllegalStateException("Cet email existe deja");
        }
        else{
            userRepository.save(u);
        }
    }


    public void deleteAnUser(long id) {
        boolean exist = userRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("L'utilisateur avec l'id " + id + " n'existe pas!");
        }
        else{
            userRepository.deleteById(id);
        }
    }

    public void updateAnUser(Long id, User u) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalStateException("L'utilisateur avec l'id " + id + " n'existe pas!"));
        String name = u.getUsername();
        String job = u.getJob();
        if(name!=null && name.length() > 0 && !name.equals(user.getUsername())){
            user.setUsername(name);
        }
        if(job != null && job.length() > 0 && !job.equals(user.getJob())){
            user.setJob(job);
        }

        userRepository.save(user);
    }

    public Optional<User> getOneUser(Long id) {
        return userRepository.findById(id);
    }
}
