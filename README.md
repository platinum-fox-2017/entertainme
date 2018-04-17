# entertainme

### Movie

| METHOD        | URL                                   |
| ------------- | ------------------------------------- |
| GET           | http://localhost:3001/movies          |
| POST          | http://localhost:3001/movies          |
| PUT           | http://localhost:3001/movies/:movieId |
| DELETE        | http://localhost:3001/movies/:movieId |
### TV

| METHOD        | URL                            |
| ------------- | ------------------------------ |
| GET           | http://localhost:3002/tv       |
| POST          | http://localhost:3002/tv       |
| PUT           | http://localhost:3002/tv/:tvId |
| DELETE        | http://localhost:3002/tv/:tvId |

### Entertainme

| METHOD        | URL                                          |
| ------------- | -------------------------------------------- |
| GET           | http://localhost:3000/entertainme            |
| POST          | http://localhost:3000/entertainme/movie      |

### Benchmark

| Number of Test| Before Redis | After Redis |
| ------------- | ------------ | ----------- |
| 1             | 61ms         | 35ms        |
| 2             | 51ms         | 6ms         |
| 3             | 31ms         | 35ms        |
| 4             | 40ms         | 26ms        |
| 5             | 41ms         | 31ms        |


