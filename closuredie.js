function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;
  /* your code here */



// console.log(rollDie());  // 1 (for example)

  return function() {
    /* your code here */
    if (i > list.length - 0) (i = 0)
    return list[i++];
    }
  }


var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6