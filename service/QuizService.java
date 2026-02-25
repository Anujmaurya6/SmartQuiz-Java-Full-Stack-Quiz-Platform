package com.classesQuiz.demo.service;

import java.util.List;

import com.classesQuiz.demo.entity.Question;

public interface QuizService {

	List<Question> getQuestions(String subject, String level);

}
