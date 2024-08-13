# Web Portfolio for Graphic Designer

## 1. Introduction
This project involves the development of a portfolio website for a graphic designer. The site is designed to showcase the designer's work, provide information about their services, and allow users to contact them through a form. The page is optimized for mobile devices and uses modern technologies both in the frontend and backend.

### Technologies Used
#### Frontend
- HTML5
- CSS3 (with media queries for responsive design)
- JavaScript (Vanilla JS)

#### Backend
- Node.js
- Express.js
- Nodemailer (for sending emails)

#### Development Tools
- Postman (for API testing)
- GitHub (for code management and documentation)
- Google App Key (to authenticate Gmail usage when sending emails)

#### Development Environment
- Visual Studio Code

## 2. Requirements

#### Frontend Dependencies and Libraries

- **HTML5**: Markup language for structuring the content of the web pages.
- **CSS3**: Styling language for designing and laying out the web pages.
- **JavaScript (Vanilla JS)**: Scripting language for creating dynamic and interactive elements on the website.

#### Backend Dependencies and Libraries

- **Node.js**: JavaScript runtime environment for executing JavaScript code server-side.
- **Express.js**: Web framework for Node.js, used for building web applications and APIs.
- **Nodemailer**: Node.js module for sending emails via SMTP, used to handle email sending functionality from the backend.

#### Node.js Dependencies

These are the dependencies that should be installed in your Node.js project:

- **express**: Web application framework for Node.js.
  ```bash
  `npm install express`

- **nodemailer**: Library for sending emails from Node.js applications.
  ```bash
  `npm install nodemailer`
- **dotenv**: Module to load environment variables from a .env file.
  ```bash
  `npm install dotenv`

## 3. Environment Setup
### Frontend
#### Installation
##### Prerequisites
1. **GitHub Account:** If you don't have an account, you can sign up for GitHub.
2. **Access to the Original Repository:** You will need the link to the GitHub repository you want to clone.
3. **Hostinger Account:** To link the project to a custom domain, you need a Hostinger account.

##### Installation Steps
1. **Clone the Repository**
   - Sign in to your GitHub account.
   - Go to the original repository you want to clone.
   - Click the "Fork" button in the top right corner of the repository page. This will create a copy of the repository in your account.
   - In your new repository, click the "Code" button and copy the repository URL.
   - Open a terminal on your computer and run the following command to clone the repository to your local machine:
	Command console:
	`git clone (your repository URL)`
	
	Example:
	`git clone https://github.com/tu-usuario/tu-repositorio.git`
	
	- Navigate to the cloned project's directory.
    Console command:
    `cd (your-repository)`
2. Create a New Repository on GitHub.
	- Sign in to your GitHub account.
	- Click the "New" button in the top right corner to create a new repository.
	- Give the repository a name and configure the options to your liking.
	- Do not initialize the repository with a README or .gitignore files, as these files will be handled from the code you cloned.
	- Click on "Create repository".
	- In the Project Backend folder.
3. Create an .env file to store the environment variables.
	Code:
	`EMAIL_USER=(your-email)`
	`EMAIL_PASS=(your-key-acces)`
	`PORT=(your-port)`
4. Upload the Code to your Repository.
	- Make sure you're in the cloned project's directory.
	- Set the new repository to remote in your local project:
    Copiy code:
    `git remote add origin https://github.com/tu-usuario/nuevo-repositorio.git`
    - Sube el código al nuevo repositorio:
    Copy code:
    `git push -u origin master`
5. GitHub Pages configuration.
	- Go to your new repository settings on GitHub.
	- Scroll down to the "Pages" section.
	- Under "Source", select the branch that contains your frontend (usually main or master).
	- Click "Save." GitHub will start generating your website pages.
6. Link the Project to a Custom Domain in Hostinger.
	- Log in to your Hostinger account and go to the domains section.
	- Set DNS records to point to GitHub Pages:
        - CNAME: Point your domain to tu-usuario.github.io.
        - A Record: Target GitHub Pages IPs.
	- Wait for DNS changes to propagate (this may take a few hours).
	- On GitHub, in the "Pages" section, add your custom domain in the appropriate field and save your changes.
7. Verify the Installation.
	- Open a web browser and access your custom domain.
	- You should see the project frontend displayed correctly.
	- Project Structure: Describes the structure of relevant files and folders.
#### Estructura del Proyecto.
	frontend/
		assets/
			icons/
			img/
			media/
		css/
			index.css
		js/
			index.js
		index.html
### Backend:
#### Instalación: 
**1. Instaled Nodemailer**:
- Insert command in console:
	`npm init -y`
- insert command in console: 
	`npm i nodemailer`

**2. Instaled Express**:
- insert command in console:
	`npm i express`
#### Estructura del Proyecto: 
	backend/
		helpers/
			emailHelper.js
		node_modules/
		.env
		index.js
		package-lok.json
		package.json
		server.js
		testEmail.js
## 4. Proyect Usage
### Frontend:
#### Main Functions:
- **JavaScript**
	**Contact Form**.
		- A script handles data capture from the form and submission via a REST API (fetch) to the backend for processing.
        - Basic validation of fields before submission.
        - Success or error messages are displayed after form submission.
		
	**Validation and error handling**.
		- Frontend Validation: Contact form field validation before sending data to the server.
        - Error Handling: An error message is displayed to the user in case of form submission errors.
        - User Interaction: Explains how users are expected to interact with the page (forms, buttons, etc.).
		
### Backend

The backend of this project is built using Node.js and Express, focusing on creating an endpoint that allows sending emails from the contact form. Below is the implementation and usage of the available endpoints:

#### Endpoints

**1. Send Email**

- **URL**: `/send-email`
- **HTTP Method**: `POST`
- **Description**: This endpoint receives the data from the contact form (name, email, and message) and sends it to a specified email address using Nodemailer.

- **Parameters**:
  - **Body**:
    - `name` (string): The sender's name.
    - `email` (string): The sender's email address.
    - `message` (string): The message they want to send.

- **Response**:
  - **Success**:
    - **HTTP Code**: `200 OK`
    - **Body**: `{ "message": "Email sent successfully" }`
  - **Error**:
    - **HTTP Code**: `500 Internal Server Error`
    - **Body**: `{ "error": "Error sending the email" }`

- **Request Example**:
  ```bash
  curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -d '{
        "name": "John Doe",
        "email": "johndoe@example.com",
        "message": "Hello, I am interested in your services."
      }'
- **Response Example (Success)**:
`{
  "message": "Email sent successfully"
}`
- **Response Example (Error)**:
`{
  "error": "Error sending the email"
}`
## 5. Testing

### Frontend Testing

To ensure the functionality of the frontend, you can follow these steps:

1. **Manual Testing**:
   - **Browser Compatibility**: Open the website in different browsers (e.g., Chrome, Firefox, Safari, Edge) to check for cross-browser compatibility.
   - **Responsiveness**: Test the website on various devices (mobile, tablet, desktop) to verify that the design is responsive and adjusts correctly to different screen sizes.
   - **Form Validation**: Test the contact form by entering valid and invalid data to ensure that the form validates input correctly before submission.
   - **Interactive Elements**: Verify that all interactive elements such as buttons, links, and navigation menus work as expected.

2. **Developer Tools**:
   - **Inspect Element**: Use the browser’s developer tools (F12) to inspect the elements and debug any issues with CSS or JavaScript.
   - **Console Logs**: Check the console for any errors or warnings during interaction with the webpage.
   - **Network Tab**: Use the network tab to monitor HTTP requests made by the frontend, particularly when submitting the contact form.

3. **Automated Testing** (Optional):
   - **Lighthouse**: Run Google Lighthouse in Chrome DevTools to get insights into the page's performance, accessibility, SEO, and best practices.
   - **Google PageSpeed Insights**: Use [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to analyze the page’s loading speed and performance metrics. This tool provides suggestions on how to improve the page's speed and overall user experience.
   - **End-to-End Testing**: Implement tools like Cypress or Selenium for automated end-to-end testing to simulate user interactions and verify the entire flow.

### Backend Testing

To ensure the functionality and reliability of the backend, you can follow these steps:

1. **Unit Testing**:
   - **Jest/Mocha**: Write unit tests for individual functions or components of your backend using testing frameworks like Jest or Mocha. For example, you could write tests to ensure the correct handling of email data in the `/send-email` endpoint.
   - **Mocking**: Use tools like `sinon.js` or Jest mocks to simulate external dependencies (e.g., Nodemailer) and test the logic independently.

2. **Integration Testing**:
   - **Supertest**: Use Supertest in combination with Mocha or Jest to test your Express routes. This ensures that the integration between different parts of your application (e.g., routes, middleware, and external services) works as expected.
   - **Database Testing** (if applicable): If your project includes database interaction, use an in-memory database like SQLite or MongoDB Memory Server to test database-related functionality.

3. **API Testing with Postman**:
   - **Postman**: Use [Postman](https://www.postman.com/) to manually test the API endpoints. Create a collection in Postman to send different payloads to the `/send-email` endpoint, and verify the response.
   - **Error Handling**: Test the API's error handling by sending invalid data or simulating failure scenarios (e.g., incorrect email credentials) to ensure the API responds with appropriate status codes and messages.

4. **End-to-End Testing** (Optional):
   - **Full Workflow**: Set up end-to-end tests that cover the entire workflow, from submitting the form on the frontend to receiving the email via the backend, to ensure the complete integration is functioning correctly.
   - **CI/CD Pipeline**: Integrate automated tests into your CI/CD pipeline to automatically run tests on every code change, ensuring continuous validation of your application’s functionality.

5. **Debugging**:
   - **Logging**: Implement logging in your Node.js application (using tools like `winston` or the native `console.log`) to track and debug any issues that arise during testing or production.
   - **Error Monitoring**: Use error monitoring services like Sentry to catch and report runtime errors in the backend, which can then be addressed in subsequent tests.

## 6. Additional Resources
Links:
	[Extra documentation for Backend tests.](https://github.com/frank-gp/doc/blob/main/backend/nodejs/nodemailer/nodemailer.md "Documentation for test")
## 7. Maintenance
Maintenance:
    - Maintain optimized images in webp format
    - Keep contact information and links up to date
    - Debugging the server
    - Adjust meta tags if necessary
## 8. Licence
Proyect licence: Propietary licence (read file "LICENSE" from the repository)