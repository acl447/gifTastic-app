
var topics = ["volleyball", "basketball", "swimming", "soccer", "golf", "surfing", "football", "baseball", 
"softball", "lacrosse", "field hockey", "tennis", "hockey", "rowing", "bowling", "diving", "paddleboarding", "skiing",
"gymnastics", "skateboarding", "snowboarding"];

for (var i = 0; i < topics.length; i++) {

var button = $("<button class='btn btn-info btn-sm mx-2 my-1' id='gif-btn'>");

button.text(topics[i]);

$("#gif-section").append(button);



};







/*$("#submit").click(function() {










});

$ajax ({

    url: queryURL,
    method: "GET"




}).then() */