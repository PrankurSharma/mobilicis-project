Thank you for visiting this project. This project is a part of selection process for Full Stack Developer role at Mobilicis.

Technical Skills used in this project: ReactJS(Frontend), NodeJS(Backend), MongoDB(Database), Netlify(Frontend deployment), Render(Backend deployment)

Link to the deployed website:
https://aqitracker.netlify.app/

There are a few third party libraries used in order to perform the desired functionalities:

1. Express: This NodeJS framework is used in the backend in order to connect it with front end. The API responses are cached using a library that uses express.

2. Axios: Axios is used both at front end. It is used for fetching the records from the backend.

4. express-api-cache: This library is used at the back end in order for the server to create a cache. Cache is created on the server side and it stores the data for 2 hours. Data is refreshed after every two hours and new data is automatically taken from the database. The difference in the data fetching speeds can be seen from the Networks tab under Developer Tools option on the browser. Data is fetched much faster from the cache as compared to direct database fetching. Everytime a new record is fetched, it initially gets fetched from the database. Then, the data is stored on the cache. When the data is requested again, it is fetched from the cache. 

5. CORS: Cors is another library that is used for seamless transfer of data between front end and back end. It provides a middleware for backend in order to communicate with front end.

6. react-paginate: This library is used for providing data pagination on the front end.

Note: process.env.LINK in index.js of server folder needs to be replaced with the mongodb database link. The implementation can be seen from the above given deployed website link.

