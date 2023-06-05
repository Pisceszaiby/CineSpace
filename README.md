# CineSpace
CineSpace is a Full Stack Movie Database MERN Web Application. It displays the most popular movies of IMDB. The application allows the user to search for movies based on its genre, name and description. A curated list of movies based on genre is shown in different genre pages. You can search for a movie’s plot, release year, IMDB Rating, actors, genre, directors and description. Users can also maintain a watch list. Based on the watch List the application rates the top genre, actor, movie of the user.
## Images
#### Main Page
![image](https://github.com/Pisceszaiby/CineSpace/assets/52016745/0a708876-0472-4b47-80ce-5e30daeefd51)
#### WatchList
![image](https://github.com/Pisceszaiby/CineSpace/assets/52016745/403757f5-5de4-4034-b5f2-454b91ccafe2)
![image](https://github.com/Pisceszaiby/CineSpace/assets/52016745/113799a1-b620-41e7-8cb4-5233a7b95c00)
#### Search Results Page
![image](https://github.com/Pisceszaiby/CineSpace/assets/52016745/4d17d8a7-2580-49ab-a55c-99de25b0e18b)
#### Movie Info Page
![image](https://github.com/Pisceszaiby/CineSpace/assets/52016745/2e19fc3d-465c-4753-9272-c02043bd3e04)
![image](https://github.com/Pisceszaiby/CineSpace/assets/52016745/26295077-5a93-42c0-8edd-10c9e1b2d7bd)
#### One of the 13 Genre Pages: Animation:
![image](https://github.com/Pisceszaiby/CineSpace/assets/52016745/f6f53695-30f5-42eb-b5cc-dfba1a57b96e)
![image](https://github.com/Pisceszaiby/CineSpace/assets/52016745/a57e0c97-54c8-4ac4-8160-7a574cecc32f)
![image](https://github.com/Pisceszaiby/CineSpace/assets/52016745/11a6f524-17e7-4b04-8386-e99f5d590c8b)

## Technologies Used
### •	Front End
Uses React to maintain the Front End of the web application due to the usability and effectiveness of React. Along with React, Bootstrap is also used to introduce responsiveness in the web application, so that the application can be used in different screen sizes. Vanilla HTML, CSS and JavaScript is used to customize the Bootstrap classes.
### •	Back End 
Together, Node.js and Express form the backend foundation of a MERN application. Node and Express are used to create a server, define API endpoints, handle client requests, interact with databases (such as MongoDB), and send responses back to the client. 
### •	Database
MongoDB is maintained with different fields related to movies. The data in the movies databased is accessed, modified and created using the Express Server which receives client requests and sends response based on the MongoDB Data.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm start`

To change current directory to server in a differet terminal

### `cd server`

To run the backend server app.js file, to start the server side. The [http://localhost:4000]
contains the server side data.

### `nodemon app.js`

Make a new DB in MongoDBCompass named as MovieDB, create a new collection movies
Import the CSV movies.csv file in the MongoDBCompass
To run the app mongo server

### `mongo`

Run it another terminal

### `mongod`
