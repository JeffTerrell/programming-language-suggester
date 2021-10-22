// Business Logic
let js = 0;
console.log();
let python = 0;
let csharp = 0;


function scoreKeeper(language) {
  if (language === "js") {
    js += 1;
    console.log();
  } else if (language === "python") {
    python += 1;
  } else if (language === "csharp") {
    csharp += 1;
  }
}

function mostPoints(js,python,csharp) {
  if ("fashionstyle" === "select" || "preference" === "select" || "fantasycreature" === "select" || "music" === "select" || "pickcolor" === "select") {
    $("#error").show();
  } else if (js > python && js > csharp) {
    $("#outputjs").show();
    console.log("help!");
  } else if (python > js && python > csharp) {
    $("#outputpython").show();
  } else if (csharp > js && csharp > python) {
    $("#outputcsharp").show();
  }
}



// User Interface Logic
$(document).ready(function() {
  console.log("Script executing!");
  $("#programselector").submit(function(event) {
    event.preventDefault();

    scoreKeeper($("#fashionstyle input").val());
    console.log();
    scoreKeeper($("#preference").val());
    console.log();
    scoreKeeper($("#fantasycreature").val());
    scoreKeeper($("#music").val());
    scoreKeeper($("#pickcolor").val());

    mostPoints(js, python, csharp);

    $("#outputjs").empty();
    $("#outputpython").empty();
    $("#outputcsharp").empty(); 

  });
});    