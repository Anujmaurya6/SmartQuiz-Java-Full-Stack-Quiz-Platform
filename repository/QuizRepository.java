package com.classesQuiz.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.classesQuiz.demo.entity.Question;

public interface QuizRepository extends JpaRepository<Question,Long>{
   List<Question> findBySubjectAndLevel(String subject,String level);

}
