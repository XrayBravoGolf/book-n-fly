Currently, this project includes the following APIs

/api/users/login
/api/users/checklogin

POST /api/users/login is for obtaining an authorization token
    This endpoint expects in the request body a JSON of format `{"email":"somebody@example.com","password":"mypassword"}`
    *Warning: in this demo the password is sent without being hashed; do not deploy in production*
    Expected response, should it authenticate, responds a JSON resembling `{"email":"somebody@example.com","Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inh1eDhAcnBpLmVkdSIsImlhdCI6MTYxOTMwODkxNywiZXhwIjoxNjE5NTY4MTE3fQ.DvTdFLQ-aa7qo3WMnlkj0z5GhcD0CK1VzgQwl9nYufo"}`

POST /api/users/checklogin is for checking if an authorization token is current
    This endpoint expects in its header a JSON of `{"Authorization":(the jwt token)}`