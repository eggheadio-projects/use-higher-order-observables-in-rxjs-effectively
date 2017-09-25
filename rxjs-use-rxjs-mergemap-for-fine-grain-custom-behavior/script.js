const sourceObservable = Rx.Observable.interval(500).take(5);

const resultObservable = sourceObservable
  .mergeMap(x => {
    if (x % 2 === 0) {
      return Rx.Observable.of(x);
    } else {
      return Rx.Observable.of(x+1,x+2);
    }
  });

/*
---0---1---2---3---4|

---+---+---+---+---+|
   \   \   \   \   \
   0|  23|  2| 45| 4|
   
---0---23--2---45--4|
*/

// mergeMap
// concatMap
// switchMap

resultObservable
  .subscribe(x => console.log(x) || displayInPreview(x));

  
// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}