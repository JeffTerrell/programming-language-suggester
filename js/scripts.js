// Business Logic
const js = 0;
const python = 0;
const csharp = 0;


function scorekeeper(language) {
  if (language === "js") {
    js += 1;
  } else if (language === "python") {
    python += 1;
  } else if (language === "csharp") {
    csharp += 1;
  }
}

function mostpoints(js,python,csharp) {
  if ("fashionstyle" === "select" || "preference" === "select" || "fantasycreature" === "select" || "music" === "select" || "pickcolor" === "select") {
    $("#error").show();
  } else if (js > python && js > csharp) {
    $("#outputjs").show();
  } else if (python > js && python > csharp); {
    $("#outputpython").show();
  } else if (csharp > js && csharp > python) {
    $("#outputcsharp").show();
  }

}



// User Interface Logic
$(document).ready(function() {
  $("#programselector").submit(function(event) {
    event.preventDefault();
    $("#outputjs").empty();
    $("#outputpython").empty();
    $("#outputcsharp").empty();
 

  });
});    