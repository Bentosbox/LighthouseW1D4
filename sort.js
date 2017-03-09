var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

  var sorting = students.sort(function(a, b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1
      }
      if (nameB < nameA) {
        return 1;
      }

      var ageA = a.age
      var ageB = b.age
        if (ageA < ageB) {
          return -1
        }
        if (ageB < ageA) {
          return 1;
        }
        return 0;
  });

console.log(sorting);