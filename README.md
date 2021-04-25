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

### Authentication
Upon login, backend sends a jwt token, which is stored in `window.sessionStorage`; this string is subsequently sent on all API calls by the frontend, through a request filter by axios
Certain routes require authentication, which are designated in the router file; the `router.beforeEach((to, from, next) => {})` allowed the frontend to make decisions on whether to continue routing or redirect to login page, by making an http request with stored

### API
A dedicated file keeps all APIs used together; pages refer to the variables inside api.js for their request


signin
auth

TODO:
bookings page
check out page
check in page

## Backend

API
database
jsonwebtoken
authentication


## Database

create db
users table