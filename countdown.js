var countdownGenerator = function (x) {
  /* your code here */
  var i = x
  return function() {
  if (i > 0) {
    console.log("T-minus" + i + "...");
    i = i - 1;
    return i;
  } else
  if (i === 0) {
    console.log("Blast Off!");
    i = -1;
    return i

  } else
  if (i < 0) {
    console.log("Rockets already gone, bub!");
    return i
  }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
