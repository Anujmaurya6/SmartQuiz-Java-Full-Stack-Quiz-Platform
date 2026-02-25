package com.classesQuiz.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.classesQuiz.demo.entity.Question;
import com.classesQuiz.demo.service.QuizService;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin
public class QuizController {
 
	@Autowired
	private QuizService quizservice;
	
	@GetMapping("/questions")
	public List<Question> getQuestions(
	@RequestParam String subject,
	@RequestParam String level
){
		return quizservice.getQuestions(subject,level);
	}
}