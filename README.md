# MVC Tech Blog

A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts, built with the MVC paradigm using Node.js, Express, Sequelize, and Handlebars.

## Description

This MVC Tech Blog is a platform designed for developers to share and discuss technological advancements, tutorials, and personal insights into the world of development. It allows users to create, edit, and delete posts, as well as comment on posts made by others. It's built following the Model-View-Controller (MVC) architectural pattern.

## Features

- User authentication for signup, login, and logout.
- Users can create, view, edit, and delete blog posts.
- Users can comment on posts.
- Responsive web design for desktop and mobile access.

## Technologies Used

- Node.js
- Express.js
- MySQL2
- Sequelize ORM
- Express-Handlebars
- bcrypt for password hashing
- express-session and connect-session-sequelize for session management
- dotenv for environment variables

## Installation

To run this application locally, ensure you have Node.js and MySQL installed on your system.

### 1. Clone the Repository

Clone the project repository by running the following command in your terminal:

```bash
git clone https://github.com/your-github-username/mvc-tech-blog.git
cd mvc-tech-blog
### 2. Install Dependencies

Once you're in the project directory, install the necessary dependencies by running:
npm install


### 3. Setup Environment Variables

Create a `.env` file in the root directory of the project. Populate it with your MySQL user credentials and database name like so:

DB_NAME='tech_blog_db'
DB_USER='your_mysql_username'
DB_PASSWORD='your_mysql_password'

### 4. Initialize the Database

Before running the application, you need to create the database. You can do this by running the schema file through MySQL command line or a GUI like MySQL Workbench:

mysql -u root -p
source db/schema.sql;
exit

### 5. Seed the Database (Optional)

To seed the database with initial data, run:

npm run seed

### 6. Start the Application

Finally, start the server with:
npm start

Navigate to `http://localhost:3000` in your browser to view the application.

### Usage

After setting up the application, you can use it by registering for an account and then logging in. This enables you to create, view, edit, and delete blog posts, as well as comment on posts made by other users.

### File Structure-
MVC.TECH.BLOG
├── config
│   └── connection.js
├── controllers
│   ├── api
│   │   ├── index.js
│   │   └── userRoutes.js
│   ├── homeRoutes.js
│   └── index.js
├── db
│   └── schema.sql
├── models
│   ├── Comment.js
│   ├── Post.js
│   └── User.js
├── node_modules
├── public
│   ├── assets
│   ├── css
│   │   └── style.css
│   ├── js
│   │   ├── login.js
│   │   ├── logout.js
│   │   └── script.js
│   └── index.html
├── seeds
│   ├── seed.js
│   └── userData.json
├── utils
│   ├── auth.js
│   └── helpers.js
├── views
│   ├── layouts
│   │   └── main.handlebars
│   ├── partials
│   │   └── post.handlebars
│   ├── dashboard.handlebars
│   ├── homepage.handlebars
│   └── login.handlebars
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── server.js
