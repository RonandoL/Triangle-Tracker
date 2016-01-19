// Business Logic
var triangleTracker = function(sideA, sideB, sideC) {
  if ((sideA === sideB) && (sideB === sideC)) {
    return "equilateral";
  } else if ((sideA === sideB) && (sideA !== sideC)) {
    return "isosceles";
  } else if ((sideA !== sideB) && (sideA !== sideC)) {
    return "scalene";
  } else {
    return "Not A Triangle";
  }

};

// Interface Logic
$(document).ready(function() {
  $("form.triangle").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var result = triangleTracker(sideA, sideB, sideC);

    $(".sideA").text(sideA);
    $(".sideB").text(sideB);
    $(".sideC").text(sideC);
    $(".typeOfTriangle").text(result);

    event.preventDefault();
    });


});
