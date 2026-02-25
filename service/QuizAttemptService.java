package com.classesQuiz.demo.service;

import java.util.List;
import com.classesQuiz.demo.entity.QuizAttempt;

public interface QuizAttemptService {

    QuizAttempt saveAttempt(QuizAttempt attempt, String email);

    List<QuizAttempt> getAttemptsByEmail(String email);
}
