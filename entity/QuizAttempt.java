package com.classesQuiz.demo.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "quiz_attempts")
public class QuizAttempt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String subject;
    private String level;

    private int totalQuestions;
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public int getTotalQuestions() {
		return totalQuestions;
	}
	public void setTotalQuestions(int totalQuestions) {
		this.totalQuestions = totalQuestions;
	}
	public int getCorrectAnswers() {
		return correctAnswers;
	}
	public void setCorrectAnswers(int correctAnswers) {
		this.correctAnswers = correctAnswers;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public LocalDate getAttemptDate() {
		return attemptDate;
	}
	public void setAttemptDate(LocalDate attemptDate) {
		this.attemptDate = attemptDate;
	}
	public LocalTime getAttemptTime() {
		return attemptTime;
	}
	public void setAttemptTime(LocalTime attemptTime) {
		this.attemptTime = attemptTime;
	}
	private int correctAnswers;
    private int score;

    private LocalDate attemptDate;
    private LocalTime attemptTime;

    // getters setters
}
