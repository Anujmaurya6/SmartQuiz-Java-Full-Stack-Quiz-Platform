package com.classesQuiz.demo.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.classesQuiz.demo.entity.User;
import com.classesQuiz.demo.repository.UserRepository;
import com.classesQuiz.demo.security.JwtUtil;
import com.classesQuiz.demo.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    
    @Override
    public String login(User user) {

        User existingUser = userRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        return jwtUtil.generateToken(existingUser.getEmail());
    }

    
    public String signup(User user) {

        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        return "User Registered Successfully";
    }
}
