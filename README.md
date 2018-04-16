#Entertainme

## Benchmark Result
| Request              | Exp | Without Redis | With Redis |
|--------------------- |-----|---------------|------------|
| Get Movies & Tv Data | 1   |    640 ms     |   650 ms   |  
|                      | 2   |    578 ms     |    60 ms   |  
|                      | 3   |    770 ms     |    55 ms   |  
|                      |     |               |            | 
| Get Movies Data      | 1   |    364 ms     |   387 ms   |  
|                      | 2   |    373 ms     |    65 ms   |  
|                      | 3   |    366 ms     |    87 ms   | 
|                      |     |               |            | 
| Get Tv Data          | 1   |    400 ms     |   381 ms   |  
|                      | 2   |    481 ms     |    41 ms   |  
|                      | 3   |    378 ms     |    45 ms   |  
|                      |     |               |            | 
