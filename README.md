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

| Method	| Experiment 		| Without Redis (ms) 	| With Redis (ms) |
| ------- | ------------- | ------------------- |-----------------|
| GET		 	| 1 	 					| 				72.6ms 			| 		24.4ms	 		|
| GET		 	| 2 	 					| 				12.5ms 			| 		11.7ms	 		|
| GET		 	| 3 	 					| 				26.1ms 			| 		13.9ms	 		|
| POST	 	| 1 	 					| 				20.1ms 			| 		13.7ms	 		|
| POST	 	| 2 	 					| 				28.6ms 			| 		10.9ms	 		|
| POST	 	| 3 	 					| 				10.4ms 			| 		19.0ms	 		|
| PUT		 	| 1 	 					| 				33.5ms 			| 		14.6ms	 		|
| PUT		 	| 2 	 					| 				20.5ms 			| 		12.5ms	 		|
| PUT		 	| 3 	 					| 				42ms  			| 		17.6ms	 		|
| DELETE 	| 1 	 					| 				15.7ms 			| 		13.2ms	 		|
| DELETE 	| 2 	 					| 				7.84ms 			| 		9.41ms	 		|
| DELETE 	| 3 	 					| 				8.01ms 			| 		8.65ms	 		|
