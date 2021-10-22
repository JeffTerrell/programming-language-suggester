// Business Logic
let js = 0;
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
  if (js > python && js > csharp) {
    return "JS";
  } else if (python > js && python > csharp) {
    return "Python";
  } else if (csharp > js && csharp > python) {
    return "C#";
  } else {
    return "Please answer all questions"
  }
}


// User Interface Logic
$(document).ready(function() {
  console.log("Script executing!");
  $("#programselector").submit(function(event) {
    event.preventDefault();

    scoreKeeper($("#fashionstyle").val());  
    scoreKeeper($("#preference").val());
    scoreKeeper($("#fantasycreature").val());
    scoreKeeper($("#music").val());
    scoreKeeper($("#pickcolor").val());
   
    $("#testresult").text(mostPoints(js, python, csharp));

    js = 0
    python = 0
    csharp = 0
  });
});    