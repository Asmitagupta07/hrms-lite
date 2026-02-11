# HRMS Lite – Full Stack Application

## 📌 Project Overview

HRMS Lite is a lightweight Human Resource Management System built as a full-stack web application.

The system allows an admin to:

- Manage employee records
- Track daily attendance
- View dashboard summary

This project demonstrates end-to-end full-stack development including backend API design, database modeling, frontend integration, and deployment readiness.

---

## 🚀 Live Application

Frontend URL: (Add after Vercel deployment)

Backend API: (Add after Render deployment)

---

## 🛠 Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- Gunicorn (Production Server)

### Frontend
- React (Vite)
- Axios
- React Router

### Database
- SQLite (Development)
- Ready for PostgreSQL (Production)

### Deployment
- Backend: Render
- Frontend: Vercel

---

## ✨ Features Implemented

### 1️⃣ Employee Management

- Add new employee
- View employee list
- Delete employee
- Unique employee ID validation
- Email validation
- Duplicate prevention

### 2️⃣ Attendance Management

- Mark attendance (Present / Absent)
- Select date
- View attendance records
- Prevent duplicate attendance for same date

### 3️⃣ Dashboard Summary (Bonus Feature)

- Total Employees
- Total Attendance Records
- Present Today
- Absent Today

### 4️⃣ UI Features

- Sidebar Navigation
- Clean card-based layout
- Loading states
- Empty states
- Error handling
- Professional styling

---

## 📂 Project Structure

hrms-lite/
│
├── backend/
│ ├── settings.py
│ ├── urls.py
│ └── hr/
│ ├── models.py
│ ├── views.py
│ ├── serializers.py
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── api.js
│ │ └── App.jsx
│
├── requirements.txt
└── README.md


---

## 🔧 How to Run Locally

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


Backend runs at:

http://127.0.0.1:8000/
Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at:
http://localhost:5173/

⚠ Assumptions

Single admin user

No authentication required

No payroll or leave management included

Designed as lightweight internal HR tool



👩‍💻 Author

Asmita Gupta
Full Stack Developer