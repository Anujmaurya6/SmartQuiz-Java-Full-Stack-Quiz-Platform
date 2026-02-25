🚀 Quiz Application (Java Full Stack)

A full-stack Quiz Application built using Java (Spring Boot) and React, designed to evaluate users across multiple subjects with real-time scoring and performance tracking.

📌 Features
🎯 Subject-wise quizzes (HTML, Java, JavaScript, Spring Boot)
📊 Difficulty levels: Easy | Medium | Hard
🔄 Dynamic question fetching from database
✅ Real-time score calculation
📅 Quiz attempt history tracking (date & time)
🔐 User authentication (JWT-based login system)
⚡ Fast REST APIs using Spring Boot
🎨 Clean and responsive UI using React
🧪 Unit testing using JUnit & Mockito

🛠️ Tech Stack
🔙 Backend

Java
Spring Boot
Spring Security (JWT)
Spring Data JPA
Hibernate

🔜 Frontend
React.js
HTML, CSS, JavaScript

Axios (API integration)
🗄️ Database

MySQL
🧪 Testing
JUnit
Mockito

🧩 Project Structure
🔙 Backend (Spring Boot)
com.classesQuiz.demo
│
├── config        → CORS configuration
├── controller    → REST APIs (Auth, Quiz, Attempts)
├── service       → Interfaces (business logic)
├── impl          → Service implementations
├── repository    → JPA repositories
├── entity        → Database entities (User, Question, QuizAttempt)
├── security      → JWT, Filters, Security Config
└── DemoApplication.java
🔜 Frontend (React)
src
│
├── api           → API calls (authApi, quizApi)
├── components    → Reusable UI (Navbar, QuestionCard, etc.)
├── context       → State management (Auth, Quiz)
├── pages         → Screens (Login, Dashboard, Quiz, Result, History)
├── App.jsx       → Routing
└── main.jsx      → Entry point

📂 Database Design
Tables:
questions:
subject, level, question, options, correct_answer
users
id, email, password
quiz_attempts
user_id, subject, level
total_questions, score
attempt_date, attempt_time

⚙️ Setup Instructions
🔙 Backend
# Clone project
git clone <repo-link>

# Open in IDE (IntelliJ / Eclipse)

# Configure MySQL in application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/classesquizdb
spring.datasource.username=root
spring.datasource.password=your_password

# Run Spring Boot application
🔜 Frontend
cd frontend
npm install
npm run dev
🧪 Testing

Unit testing implemented using JUnit

Mocking done using Mockito
Covers:
Service layer
Controller layer
