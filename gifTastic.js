
var topics = ["volleyball", "basketball", "swimming", "soccer", "golf", "surfing", "football", "baseball",
    "softball", "lacrosse", "field hockey", "tennis", "hockey", "rowing", "bowling", "diving", "paddleboarding", "skiing",
    "gymnastics", "skateboarding", "snowboarding"];

for (var i = 0; i < topics.length; i++) {

    var button = $("<button class='btn btn-info btn-sm mx-2 my-1' id='gif-btn'>");

    button.text(topics[i]);

    $("#gif-btn-section").append(button);



};







$(document.body).on("click", "#submit", function () {

    var inputValue = $("#input-box").val();


    var newButton = $("<button>");

    newButton.text(inputValue);

    newButton.attr("class", "btn btn-info btn-sm mx-2 my-1");

    newButton.attr("id", "gif-btn");

    $("#gif-btn-section").append(newButton);







});









$(document.body).on("click", "#gif-btn", function() {

    var buttonText = $(this).text();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonText + "&api_key=dTbudSbvuU8M5Az7O0DnfqU6CIYbmLT8&limit=10";

    

$.ajax ({

    url: queryURL,
    method: "GET"




}).then(function(response) {

    var gifArray = response.data;

    console.log(gifArray);

    for (var i = 0; i < gifArray.length; i++) {

        console.log(gifArray[i].rating);

        var gifDiv = $("<div class='col text-center'>");

        var gifRating = gifArray[i].rating;

       
        var imgURL = gifArray[i].images.fixed_height_still.url;
        

        var gifImageElement = $("<img>").attr("src", imgURL);

        gifImageElement.addClass("mx-2 my-2");

        gifDiv.append(gifImageElement);

        gifDiv.append(gifRating);

        $("#gif-section").prepend(gifDiv); 
    } 



}) 


})



