# Entertainme
This is a demo simple app for implementing redis, and knowing how fast this developed app respond with and without redis

## Movies Server's End Points

| No | Method   | End Point   | Description           |
| -- | ---------|-------------|-----------------------|
| 1  | GET      | /           | Get all Movies data   |
| 2  | POST     | /           | Post new data         |
| 3  | PUT      | /:id        | Update specific data  |
| 4  | DELETE   | /:id        | Delete specific data  |

Access the endpoints by visiting [http://localhost:3001/api/movies](http://localhost:3001/api/movies)  

## TV Series Server's End Points

| No | Method | End Point		| Description							|
| -- | ------ |-------------|-------------------------|
| 1  | GET  	| / 					| Get all TV Series data	|
| 2  | POST  	| / 					| Post new data						|
| 3  | PUT 		| /:id				| Update specific data 		|
| 4  | DELETE	| /:id				| Delete specific data 		|

Access the endpoints by visiting [http://localhost:3002/api/tvseries](http://localhost:3002/api/tvseries)  

## Entertainme Server's End Points

| No | Method | End Point			| Description												|
| -- | ------ |---------------|-----------------------------------|
| 1  | GET  	| / 						| Get all TV Series and Movies data	|
| 2  | GET  	| /all 					| Get all TV Series and Movies data	|
| 3  | GET  	| /movies 			| Get all Movies data								|
| 4  | GET  	| /series 			| Get all TV Series data						|
| 5  | POST  	| /movies 			| Post new data movie								|
| 6  | POST  	| /series 			| Post new data tv-series						|
| 7  | PUT 		| /movies/:id		| Update specific data movie 				|
| 8  | PUT 		| /series/:id		| Update specific data tv-series		|
| 9  | DELETE	| /movies/:id		| Delete specific data movie 				|
| 10 | DELETE	| /series/:id		| Delete specific data tv-series		|

Access the endpoints by visiting [http://localhost:3000/api/entertainme](http://localhost:3000/api/entertainme) 

## Usage
Go to each server folders, **movie**, **tv-series**, and **main**
Run this command on your command line

	> npm install
	> npm run dev
	

## Benchmarking Result
And this is the benchmarking table to know how the app run.

| Experiment 		| Without Redis (ms) 	| With Redis (ms) |
| ------------- | ------------------- |-----------------|
| 1 	 					| 				64ms  			| 			84.5ms 		|
