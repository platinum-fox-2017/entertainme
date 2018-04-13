# entertainme

Get Data

| No Cache (ms) | Cache|
| --------------| ---- |
| 138ms         | 49ms | 
| 15ms          |  5ms |
| 16ms          |  4ms |
| 28ms          |  6ms |
| 29ms          |  4ms |
| 26ms          |  8ms |

# rest-api
REST API with MVC architecture

Morning Releases (Part 1)

Release 0
1. sudo npm install express-generator
2. express . 

| Route                     | HTTP   |        Description                                               |
| ------------------------- | ------ | ---------------------------------------------------------------- |
| /api/signup               | POST   | Sign up with new user info                                       |
| /api/signin               | POST   | Sign in while get an access token based on credentials           |
| /api/users                | GET    | Get all the users info (admin only)                              |
| /api/users/:id            | GET    | Get a single user info (admin and authenticated user)            |
| /api/users                | POST   | Create a user (admin only)                                       |
| /api/users/:id            | DELETE | Create a user (admin only)                                       |
| /api/users/:id            | PUT    | Update a user with new info (admin and authenticated user)       |
