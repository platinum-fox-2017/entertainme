# entertainme

# Client

Runs on react-native, run `npm start` to start packager and `npm run android`
to connect device. To give access to localhost run `adb reverse tcp:3000 tcp:3000`.

The client shows movies list and a simple command to add execute a mutation with graphql.

# Rest API

Orchestrator (PORT 3000) Apis:

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

1) Movies (PORT 3001)

| Route           | HTTP    | Descriptions                    |
| :-------------  | :------ | :------------------------------ |
| `/movies/`          | GET     | Retrieve movies data       |
| `/movies/add`       | POST    | Create a movies            |
| `/movies/update/:id`| PUT     | Update movies data         |
| `/movies/delete/:id`| DELETE  | Delete a movies data       |

2) Shows (PORT 3002)

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
