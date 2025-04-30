# Fullstack Data Manager Project

This is a simple fullstack project I created as part of my learning. It demonstrates backend and frontend integration using **Node.js**, **Express**, **MongoDB**, and basic **HTML/CSS/JavaScript** on the frontend.
---
### How to Use This Project
If you want to use the whole app:
1. First, start the server by following the setup instructions:
   - Run `npm install`
   - Create your `.env` file
   - Then run `npm run dev`

2. Once the server is running, open the `index.html` file in your browser.

3. If you already have an account, log in directly. If not, register first by providing the required information.

4. After logging in, you will see buttons/options to interact with the data database.
---
### Available API Endpoints

The following endpoints are available:

- **POST** `/data` – Add a new data entry  
- **GET** `/data` – Get all data  
- **GET** `/data/:id` – Get a single data item by ID  
- **PUT** `/data/:id` – Update a data entry  
- **DELETE** `/data/:id` – Delete a data entry  

---

### Viewing Request and Response Details

To inspect API requests and responses:

1. Open your browser’s **Developer Tools**
2. Go to the **Network** tab
3. Perform any actions in the app (add, update, delete)
4. Check the payloads and responses for each request

### Purpose of This Project
 I built this project to practice and demonstrate how the backend and frontend can work together using:

- Node.js  
- Express  
- MongoDB  
- HTML/CSS/JavaScript (no frontend framework)
