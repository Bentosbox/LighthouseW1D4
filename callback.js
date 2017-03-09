var words = ["ground", "control", "to", "major", "tom"];





// var remapped = words.map (function(word, array) {
//   return word.length;
//     // return word.sort(function(a, b){
//     //   return a - b;
//     // });
//   });






var words = ["ground", "control", "to", "major", "tom"];

function myMap(move, call) {
  temporaryArray = [];
  move.forEach(function temporarycallback(placeholder){
    temporaryArray.push(call[words]);

  });

}
  var check = myMap(words, function(word){
    return words.length;
  });
console.log(check);

// function myMap(words, word) {
//   function myMapLength(words){
//     for (var i = 0; i < words.length; i++){
//       var wordslength = words[i].length;
//       console.log(wordslength);
//       word(wordslength());
//     }
//   }
//   function displaylength(word) {
//     console.log(word);
//   }
// };
// myMap();
// myMap();
// myMap(["ground", "control", "to", "major", "tom"], displaylength);
// conso.log(remapped[0] = 6);


// this.array.sort(function sort(a, b) {
//   return a - b;
// });
//   consol.log(array);

// }


// function Wordlength(words)