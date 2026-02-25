package com.classesQuiz.demo.impl;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.classesQuiz.demo.entity.QuizAttempt;
import com.classesQuiz.demo.entity.User;
import com.classesQuiz.demo.repository.QuizAttemptRepository;
import com.classesQuiz.demo.repository.UserRepository;
import com.classesQuiz.demo.service.QuizAttemptService;

@Service
public class QuizAttemptServiceImpl implements QuizAttemptService {

    @Autowired
    private QuizAttemptRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public QuizAttempt saveAttempt(QuizAttempt attempt, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        
        attempt.setUserId(user.getId());

        attempt.setAttemptDate(LocalDate.now());
        attempt.setAttemptTime(LocalTime.now());

        return repository.save(attempt);
    }

    @Override
    public List<QuizAttempt> getAttemptsByEmail(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return repository.findByUserId(user.getId());
    }
}
