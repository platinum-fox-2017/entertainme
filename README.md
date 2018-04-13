# entertainme

# Rest API

Orchestrator Apis:

| Route           | HTTP    | Descriptions                    |
| :-------------  | :------ | :------------------------------ |
| `/entertain/me`           | GET     | Retrieve Movies and Shows data |
| `/entertain/movies/add`       | POST    | Create a movie             |
| `/entertain/movies/update/:id`| PUT     | Update movie data          |
| `/entertain/movies/delete/:id`| DELETE  | Delete a movie data        |
| `/entertain/shows/add`        | POST    | Create a movie             |
| `/entertain/shows/update/:id` | PUT     | Update movie data          |
| `/entertain/shows/delete/:id` | DELETE  | Delete a movie data        |

Micro services API:

1) Movies

| Route           | HTTP    | Descriptions                    |
| :-------------  | :------ | :------------------------------ |
| `/movies/`          | GET     | Retrieve movies data       |
| `/movies/add`       | POST    | Create a movies            |
| `/movies/update/:id`| PUT     | Update movies data         |
| `/movies/delete/:id`| DELETE  | Delete a movies data       |

2) Shows

| Route           | HTTP    | Descriptions                    |
| :-------------  | :------ | :------------------------------ |
| `/shows/`          | GET     | Retrieve shows data        |
| `/shows/add`       | POST    | Create a shows             |
| `/shows/update/:id`| PUT     | Update shows data          |
| `/shows/delete/:id`| DELETE  | Delete a shows data        |

# Benchmark

| Without cache   | with cache |
| :-------------  | :--------- |
| `27.9 ms`       | `3.37 ms`  |
| `7.45 ms`       | `2.49 ms`  |
| `7.8 ms`        | `2.15 ms`  |
| `8.43 ms`       | `1.9 ms`   |
