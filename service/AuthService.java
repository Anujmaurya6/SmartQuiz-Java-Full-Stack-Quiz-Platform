package com.classesQuiz.demo.service;

import com.classesQuiz.demo.entity.User;

public interface AuthService {

    String login(User user);

    String signup(User user);
}
