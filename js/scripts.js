// Business Logic
let js = 0;
console.log(js);
let python = 0;
let csharp = 0;
let select = 0;

function scoreKeeper(language) {
  if (language === "js") {
    js += 1;
    console.log();
  } else if (language === "python") {
    python += 1;
  } else if (language === "csharp") {
    csharp += 1;
  } else if (language === "select") {
    select += 1;
  }  
}

function mostPoints(js,python,csharp,select) {
  if (select === 1 || select === 2 || select === 3 || select === 4 || select === 5) {
    $("#error").show();
  } else if (js > python && js > csharp) {
    $("#outputjs").show();
  } else if (python > js && python > csharp) {
    $("#outputpython").show();
  } else if (csharp > js && csharp > python) {
    $("#outputcsharp").show();
  } else {
    return "Please answer all questions"
  }
}


// User Interface Logic
$(document).ready(function() {
  console.log("Script executing!");
  $("#programselector").submit(function(event) {
    event.preventDefault(); 
    $("#outputjs").hide();
    $("#outputpython").hide();
    $("#outputcsharp").hide();
    $("#error").hide();

    scoreKeeper($("#fashionstyle").val());
    console.log(js);  
    scoreKeeper($("#preference").val());
    scoreKeeper($("#fantasycreature").val());
    scoreKeeper($("#music").val());
    scoreKeeper($("#pickcolor").val());

    mostPoints(js, python, csharp, select);

    js = 0
    python = 0
    csharp = 0
    select = 0


  });
});  