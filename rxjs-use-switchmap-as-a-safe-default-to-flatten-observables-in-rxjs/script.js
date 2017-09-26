const clickObservable = Rx.Observable
  .fromEvent(document, 'click');

// const requestObservable = ...

// const responseObservable = requestObservable
//   .switchMap(request => ... response)

const clockObservable = clickObservable
  .switchMap(click => {
    return Rx.Observable.interval(1000).map(i => i*10*click.clientX);
  });

// flattening
// Observable<Observable<number>> ---> Observable<number>

/*
--------+--------+-----------------
        \        \
         -0-1-2-3 -0-1-2-3-4-5-6---
         
         switch
         
----------0-1-2-3--0-1-2-3-4-5-6---
*/

clockObservable
  .subscribe(x => console.log(x) || displayInPreview(x));

  
// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}