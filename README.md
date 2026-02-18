# 🚀 Quiz Application (Java Full Stack)

A full-stack Quiz Application built using **Java, Spring Boot, and React**, designed to test users across multiple subjects with difficulty levels and real-time scoring.

---

## 📌 Features

* 🎯 Subject-wise quizzes (HTML, Java, JavaScript, Spring Boot)
* 📊 Difficulty levels: Easy | Medium | Hard
* 🧠 Random question generation
* ✅ Score tracking system
* 🗂️ Database-driven question storage
* 🔐 User-based quiz attempts tracking
* ⚡ Fast and scalable backend with Spring Boot
* 🧪 Unit testing using JUnit & Mockito

---

## 🛠️ Tech Stack

### Backend:

* Java
* Spring Boot
* Spring Data JPA
* Hibernate

### Frontend:

* React.js
* HTML, CSS, JavaScript

### Database:

* MySQL

### Testing:

* JUnit
* Mockito

---

## 🧩 Project Structure

```
Backend (Spring Boot)
├── Controller
├── Service
├── Repository
├── Entity
└── DTO

Frontend (React)
├── Components
├── Pages
└── API Integration
```

---

## 📂 Database Design

* `questions` → stores quiz questions with options and difficulty
* `users` → stores user details
* `quiz_attempts` → stores user performance (score, date, time)

---

## ⚙️ How to Run

### Backend:

```bash
mvn spring-boot:run
```

### Frontend:

```bash
npm install
npm start
```

### Database:

* Import `.sql` file
* Run all queries to setup tables and data

---

## 🧪 Testing

* Unit testing implemented using **JUnit**
* Mocking done with **Mockito**
* Covers service and controller layer

---

## 📈 Future Improvements

* 🔐 Authentication (JWT)
* 📊 Leaderboard system
* 📱 Mobile responsive UI
* 🌐 Deployment on cloud (AWS / Render)

---

## 💡 Learning Outcome

This project helped in understanding:

* Full-stack development flow
* REST API design
* Database structuring
* Backend testing (JUnit + Mockito)
* Real-world project architecture

---

## 👨‍💻 Author

**Anuj Maurya**
Aspiring Java Full Stack Developer 🚀

---

## ⭐ Final Note

This is not just a project —
it is a step towards becoming a professional developer.

---
