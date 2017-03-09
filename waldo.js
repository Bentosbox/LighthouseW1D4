// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function callback(currentValue, index, array) {
    if (currentValue === "Waldo") {
      found(index);   // execute callback
    }
  });


}

function actionWhenFound(index) {
  console.log("Found him at Index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



//notes for each:


  // for (int i = 0; i < arr.length; i++) {
  //     var currentValue = arr[i];
  //     temporaryCallBack(currentValue, i, arr);
  }
  // function temporaryCallBack(currentValue, index, array) {

  }
