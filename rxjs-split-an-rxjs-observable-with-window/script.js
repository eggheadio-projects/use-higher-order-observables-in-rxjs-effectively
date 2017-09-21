const clickObservable = Rx.Observable.fromEvent(document, 'click');
const clockObservable = Rx.Observable.interval(1000);

const resultObservable = clockObservable
  .window(clickObservable)
  .map(obs => obs.count())
  .switch();

/*
--0--1--2--3--4--5--6--7--8-- clockObservable
-------c-------c---c--------- clickObservable

    window
 
+------+-------+---+---------
\      \       \   \
 -0--1-|2--3--4|-5-|6--7--8--
 
  map(obs => obs.count())
  
+------+-------+---+--
\      \       \   \
 -----2|------3|--1|---
          
    switch
 
------2-------3---1----

*/

resultObservable
  .subscribe(x => console.log(x));