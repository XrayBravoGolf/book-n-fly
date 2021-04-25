# book-n-fly
(The vision of) this project is to create a resource booking website for airplane rental.
Major functions include user-authentication, rental schedule listing and making, airplane checkout and return.
Future features can include fleet management, user account balance, airplane "squawks"(minor mechanical failures) reporting records and more.

Currently, user-authentication and schedule listing are implemented, but the author has set the frontend and backend up for feature expansion through architechture design.

## Frontend
This is a single-page application

### Technology stck
Vue 3, axios, less 

### Routing
vue-router is used; a dedicated configuration file for the router is used to specify pages to frontend routes.

### Authentication
Upon login, backend sends a jwt token, which is stored in `window.sessionStorage`; this string is subsequently retrieved and sent on all API calls by the frontend, through a request interceptor by axios.

Certain routes require authentication, which are designated in the router file; the `router.beforeEach((to, from, next) => {})` allowed the frontend to make decisions on whether to continue routing or redirect to login page, by making an http request with stored

### API
axios is used on all frontend requests
A dedicated file keeps all APIs used together; pages refer to the variables inside api.js for their request.
Both 

### Webpack DevServer
The devserver is configured to proxy requests to the listening backend. The benefit is that it simulates a production environment in which both the frontend and the backend APIs are from the same host (and the same port), so the frontend and backend do not need to worry about cross-site issues. 
In addition, the DevServer made hot-reloading possible, that is the ability to see changes reflected as soon as source file is saved on disk, without even the need to hit refresh on brower.


## Backend
### Technology stack
Express, Postgres

### Authentication
jsonwebtoken, or jwt is used in this project; this is picked over session cookies because tokens enable use on distributed systems and do not rely on *state* of a specific server to function.

### Other notes
Code base separated to router, controller, utilities and an index.js to start server. The server uses dotenv to add environment variables from a file, in which security-critical details like database connection string and jwt key.

## Database

create db
users table