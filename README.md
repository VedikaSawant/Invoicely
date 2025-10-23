# 🧾 Invoice Management System

A full-stack web application designed to simplify and automate the invoice lifecycle — from creation and editing to tracking and PDF generation. Built using **Spring Boot**, **Hibernate**, **MySQL**, and a **React + Material UI** frontend, this system empowers small and medium-sized businesses to manage invoices seamlessly and securely.

-----

## 🚀 React app preview

<img width="1337" height="712" alt="image" src="https://github.com/user-attachments/assets/bc2dac0a-88f5-4b28-942e-4787b307586a" />


-----

## 🛠️ Tech Stack

### 🔹 Frontend

  - React
  - Material UI
  - Axios
  - jsPDF

### 🔹 Backend

  - Spring Boot
  - Hibernate (ORM)

 ### 🔹 Database   
  - MySQL

### 🔹 Development Platform    
  - IntelliJ IDEA and VS Code

-----

## 💡 Features

### 📱 Frontend

  - Add new invoices with client info, item details, prices, and due dates
  - View, edit, delete, and download invoices
  - One-click export of invoices as PDFs using jsPDF
  - Responsive UI built with Material UI
  - Axios-based API communication with backend

### 🔧 Backend

  - RESTful API endpoints for full invoice CRUD
  - Business logic layer for validations and processing
  - Hibernate-based database layer for MySQL interaction
  - Configuration via `application.properties`

-----

## 📂 Project Structure

```
📁 frontend (client)/
│ ├── components/
│ │ ├── addInvoice.jsx
│ │ ├── invoices.jsx
│ │ ├── home.jsx
│ │ └── header.jsx
│ └── utils/
│   └── api.js
📁 backend (server)/
│ ├── controller/
│ │ └── InvoiceController.java
│ ├── service/
│ │ └── InvoiceService.java
│ ├── dao/
│ │ └── InvoiceDAO.java
│ ├── model/
│ │ └── Invoice.java
│ └── config/
│   └── application.properties
```

## 🧪 How to Run the Project

### 🔧 Backend (Spring Boot + MySQL)

1.  Clone the repository:

    ```bash
    git clone https://github.com/VedikaSawant/Invoicely.git
    ```

2.  Open the `server` folder in IntelliJ IDEA.

3.  Set up your MySQL database:

    ```sql
    CREATE DATABASE invoicedb;
    ```

4.  Update `application.properties`:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/invoicedb
    spring.datasource.username=your-username
    spring.datasource.password=your-password
    ```

5.  Run the Spring Boot application:

    The backend will start on `http://localhost:8080/`

### 🖥️ Frontend (React)

1.  Open project in VS Code and navigate to the `client` folder:
    ```bash
    cd client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the react app:
    ```bash
    npm start
    ```
    The frontend - React app will open at `http://localhost:3000/`

-----

## 🔭 Future Scope

  - 🌧️ Support for other weather or access conditions like mobile, night-mode, and low bandwidth.
  - 🔐 User login, roles, and access control.
  - 📊 Analytics dashboard for invoice and payment trends.
  - ☁️ Cloud deployment (e.g., AWS RDS, Heroku, or Render).
  - 📧 Email notifications for invoice due reminders.

-----

## 👥 Team Members

JFST Mini-Project

  - Vaishnavi Sawant
  - Vedika Sawant
  - Aarya Shetiye

-----

## 📚 References

  - Material UI - https://mui.com/material-ui/
  - Spring Boot + Hibernate - https://www.baeldung.com/spring-boot-hibernate
  - jsPDF - https://www.npmjs.com/package/jspdf
  - React Router DOM - https://www.npmjs.com/package/react-router-dom

-----

## ✅ Conclusion

The Invoice Management System offers a robust and user-friendly platform for efficiently managing invoices. With features like PDF generation, real-time tracking, and a full-stack architecture, the system provides a practical solution for small to mid-sized businesses aiming to streamline their billing process and enhance productivity.
