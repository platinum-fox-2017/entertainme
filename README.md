# entertainme

Implement MicroServices Pattern with express and redis to improve speed of response.

### REST api

List of routes in **movie** service  run in `http://localhost:3001`:

| Route           | HTTP    | Descriptions                    |
| :-------------  | :------ | :------------------------------ |
| `/movies`    | GET     | Get all the movies               |
|  `/movies`   | POST    | Create a movie                   |
| `/movies/:id`| DELETE  | DELETE a movie                   |
| `/movies/:id`| PUT     | Update a movie with new data     |

List of routes in **tv** service run in `http://localhost:3002` :

| Route           | HTTP    | Descriptions                    |
| :-------------  | :------ | :------------------------------ |
| `/tvs`    | GET     | Get all the tv series              |
|  `/tvs`   | POST    | Create a tv series            |
| `/tvs/:id`| DELETE  | DELETE a tv series                   |
| `/tvs/:id`| PUT     | Update a tv series with new data     |


List of routes in **orkestrator** run in `http://localhost:3000`:

| Route           | HTTP    | Descriptions                    |
| :-------------  | :------ | :------------------------------ |
| `/entertainme`    | GET     | Get all the movies and tv series               |
|  `/movies`   | POST    | Create a movie                   |
| `/movies/:id`| DELETE  | DELETE a movie                   |
| `/movies/:id`| PUT     | Update a movie with new data     |
|  `/tvs`   | POST    | Create a tv series            |
| `/tvs/:id`| DELETE  | DELETE a tv series                   |
| `/tvs/:id`| PUT     | Update a tv series with new data     |

## Benchmark when use redis for cache strategy:



| Without Redis          | With Redis    | 
| :-------------  | :------ | 
| 104 ms    |  4.01 ms    | 
|  14 ms | 2.66 ms    | 
| 39.4 ms| 2.59 ms | 
| 12.3 ms|  3.32 ms | 



