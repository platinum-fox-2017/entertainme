# entertainme

an app for testing microservice and compare how fast respond with reddis and without reddis

## Usage

Go to each folders, **movie**, **tvSeries**, and **orchestrator**
Run this command on your command line

	> npm install
	> nodemon bin/www

  ## Entertainme Server's End Points

| No | Method | End Point| Description|
| ------------- | ------------- |-------------|-------------|
| 1  | GET  | /entertainme | Get all TV Series and Movies data
| 2  | GET  | /tv | Get all TV Series data
| 3  | POST  | /tv |Post new data|
| 4  | GET  | /movie | Get all Movies data
| 5  | POST  | /movie |Post new data|

## Benchmarking Result

compare how fast respond with and without Redis

| Experiment | Without Redis (ms) | With Redis (ms)|
| ------------- | ------------- |-------------|
| 1 | 704ms  | 857ms |
| 2 | 645ms  | 48ms |
| 3 | 543ms | 52ms|
| 4 | 654ms|19ms|
| 5 | 549ms|8ms|

