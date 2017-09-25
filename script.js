const clickObservable = Rx.Observable.fromEvent(document, 'click');
const clockObservable = Rx.Observable.interval(1000);
const downObservable = Rx.Observable.fromEvent(document, 'mousedown');
const upObservable = Rx.Observable.fromEvent(document, 'mouseup');

const resultObservable = clockObservable
  .windowToggle(downObservable, () => upObservable)
  .mergeAll();

/*
--0--1--2--3--4--5--6--7--8--9--
----------D-------------D------- downObservable
-------------------U------------ upObservable

 windowToggle
 
----------+-------------+-------
          \3--4--5-|    \-8--9--
          
 mergeAll
 
-----------3--4--5--------8--9--

*/

resultObservable
  .subscribe(x => console.log(x));