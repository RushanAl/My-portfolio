function identity() {
  console.log("this is first  script  function");
}

function biography(name, courses, age) {
  console.log(`your name is ${name.toUpperCase()}`);
  console.log(`your current courses  are ${courses}`);
  console.log(`your age ${age}`);
}

biography("kamil", ["UIUX", "web", "graphcis"], 23);
biography(30, "ali", [4, 3, 2, 4]);
