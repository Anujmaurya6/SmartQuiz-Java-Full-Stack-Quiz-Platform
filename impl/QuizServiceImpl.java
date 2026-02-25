package com.classesQuiz.demo.impl;

import com.classesQuiz.demo.entity.Question;
import com.classesQuiz.demo.repository.QuizRepository;
import com.classesQuiz.demo.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository questionRepository;

    @Override
    public List<Question> getQuestions(String subject, String level) {
        return questionRepository.findBySubjectAndLevel(subject, level);
    }
}
