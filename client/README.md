# Full Stack App with JWT Authentication

## Project Description

Welcome to our full-stack application! This project is a complete application that provides both a backend RESTful API and a stylish front-end user interface. The primary goal of this app is to enable user registration and login, granting them access to a personalized interface. Here are some key features and technologies used in this project:

- **Authentication and Authorization:** We've implemented user authentication and authorization using JWT tokens and bcrypt for secure password hashing. This ensures that only authorized users can access specific parts of the application.

- **Database Management:** We've chosen SQLite3 as our Database Management System (DBMS) to store and manage user data and application information.

- **Middleware:** Throughout the project, we have incorporated middleware for input sanitization, error handling, and route protection on the server side. This ensures data security and robust functionality.

- **Front-end Styling:** The front-end of the application is not just functional but also visually appealing. We've used technologies like styled-components, Material-UI, and Bootstrap to create an attractive and user-friendly interface.

- **React Router:** We've employed React Router to handle client-side routing, allowing users to navigate the application seamlessly.

## Project Structure

Here's an overview of the project structure:

- **`/client`:** Contains the front-end part of the application built using React, styled-components, Material-UI, and Bootstrap.

- **`/server`:** Houses the back-end server and API. The server is responsible for user registration, authentication, and providing access to specific user interfaces.

- **`/database`:** Contains the SQLite3 database and schema information.
