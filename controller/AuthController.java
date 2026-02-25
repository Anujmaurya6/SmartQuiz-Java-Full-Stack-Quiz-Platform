package com.classesQuiz.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.classesQuiz.demo.entity.User;
import com.classesQuiz.demo.impl.AuthServiceImpl;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthServiceImpl authService;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {
        String token = authService.login(user);

        return Map.of("token", token);
    }


    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        return authService.signup(user);
    }
}