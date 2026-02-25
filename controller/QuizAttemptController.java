package com.classesQuiz.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.classesQuiz.demo.entity.QuizAttempt;
import com.classesQuiz.demo.service.QuizAttemptService;

@RestController
@RequestMapping("/api/attempts")
@CrossOrigin
public class QuizAttemptController {

    @Autowired
    private QuizAttemptService service;


    @PostMapping("/save")
    public QuizAttempt saveAttempt(@RequestBody QuizAttempt attempt) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = (String) auth.getPrincipal();

        return service.saveAttempt(attempt, email);
    }

    
    @GetMapping("/my-attempts")
    public List<QuizAttempt> getMyAttempts() {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = (String) auth.getPrincipal();

        return service.getAttemptsByEmail(email);
    }
}