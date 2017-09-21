const numbersObservable = Rx.Observable.interval(500).take(5);

numbersObservable
  .groupBy(x => x % 2)
  .map(innerObs => innerObs.count())
  .mergeAll()
  .subscribe(x => console.log(x));

/*
--0--1--2--3--4|

 groupBy(x => x % 2)
 
--+--+---------|
  \  \
  \  1-----3---|
  0-----2-----4|
  
 map(innerObs => innerObs.count())
 
--+--+---------|
  \  \
  \  ---------2|
  ------------3|
  
 mergeAll
 
--------------(3,2)|

*/
