// Business Logic
let js = 0;
let python = 0;
let csharp = 0;
let select = 0;


function scoreKeeperOne(language) {
  if (language === "js") {
    js += 1.1;
  } else if (language === "python") {
    python += 1.1;
  } else if (language === "csharp") {
    csharp += 1.1;
  } else {
    language === "select";
    select += 1.1;
  }  
}

function scoreKeeperTwo(language) {
  if (language === "js") {
    js += 1.2;
  } else if (language === "python") {
    python += 1.2;
  } else if (language === "csharp") {
    csharp += 1.2;
  } else {
    language === "select";
    select += 1.2;
  }  
}

function scoreKeeperRemain(language) {
  if (language === "js") {
    js += 1;
  } else if (language === "python") {
    python += 1;
  } else if (language === "csharp") {
    csharp += 1;
  } else {
    language === "select";
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
    $("#Error").show();
  }
}


// User Interface Logic
$(document).ready(function() {
  $("#programselector").submit(function(event) {
    event.preventDefault(); 
    $("#outputjs").hide();
    $("#outputpython").hide();
    $("#outputcsharp").hide();
    $("#error").hide();


    scoreKeeperOne($("#fashionstyle").val());
    scoreKeeperTwo($("#preference").val());
    scoreKeeperRemain($("#fantasycreature").val());
    scoreKeeperRemain($("#music").val());
    scoreKeeperRemain($("#pickcolor").val());

    mostPoints(js, python, csharp, select);
    
    js = 0;
    python = 0;
    csharp = 0;
    select = 0;
  });
});    