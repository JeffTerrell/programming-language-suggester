// Business Logic
let js = 0;
console.log(js);
let python = 0;
let csharp = 0;
let select = 0;

function scoreKeeper1(language) {
  if (language === "js") {
    js += 1.5;
    console.log();
  } else if (language === "python") {
    python += 1.5;
  } else if (language === "csharp") {
    csharp += 1.5;
  } else if (language === "select") {
    select += 1.5;
  }  
}

function scoreKeeper2(language) {
  if (language === "js") {
    js += 1.6;
    console.log();
  } else if (language === "python") {
    python += 1.6;
  } else if (language === "csharp") {
    csharp += 1.6;
  } else if (language === "select") {
    select += 1.6;
  }  
}

function scoreKeeperRemain(language) {
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
  if (select) {
    $("#error").show();
  } else if (js > python && js > csharp) {
    $("#outputjs").show();
  } else if (python > js && python > csharp) {
    $("#outputpython").show();
  } else if (csharp > js && csharp > python) {
    $("#outputcsharp").show();
  } else {
    return "Error"
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


    scoreKeeper1($("#fashionstyle").val())
    console.log(js);
    scoreKeeper2($("#preference").val());
    console.log(python);
    scoreKeeperRemain($("#fantasycreature").val());
    scoreKeeperRemain($("#music").val());
    scoreKeeperRemain($("#pickcolor").val());

    mostPoints(js, python, csharp, select);

    js = 0
    python = 0
    csharp = 0
    select = 0
    
  });
});    