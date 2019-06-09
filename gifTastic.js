
//Array of sport names to put on buttons

var topics = ["volleyball", "basketball", "swimming", "soccer", "golf", "surfing", "football", "baseball",
    "softball", "lacrosse", "field hockey", "tennis", "hockey", "rowing", "bowling", "diving", "paddleboarding", "skiing",
    "gymnastics", "skateboarding", "snowboarding"];


//For every sport name in the array, create a button and append it to the gif button section

for (var i = 0; i < topics.length; i++) {

    var button = $("<button class='btn btn-info btn-sm mx-2 my-1' id='gif-btn'>");

    button.text(topics[i]);

    $("#gif-btn-section").append(button);



};





//When the submit button is clicked
$(document.body).on("click", "#submit", function () {

    //Grab the name of the sport that user entered in textbox
    var inputValue = $("#input-box").val();

    var newButton = $("<button>");

    //Create a new button with that sport name as its text
    newButton.text(inputValue);

    newButton.attr("class", "btn btn-info btn-sm mx-2 my-1");

    newButton.attr("id", "gif-btn");

    //Append the new button to the gif button section
    $("#gif-btn-section").append(newButton);


});


//When a gif button is clicked
$(document.body).on("click", "#gif-btn", function () {

    var buttonText = $(this).text();



    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonText + "&api_key=dTbudSbvuU8M5Az7O0DnfqU6CIYbmLT8&limit=10";


    //Make an AJAX call to the GIPHY API
    $.ajax({

        url: queryURL,
        method: "GET"




    }).then(function (response) {

        
        var gifArray = response.data;

        //Loop through the array of response data from the GIPHY API
        for (var i = 0; i < gifArray.length; i++) {

            var gifDiv = $("<div id='gif-div'>");

            //Grab gif rating, still image, and animated image data
            var gifRating = gifArray[i].rating;

            var imgURL = gifArray[i].images.fixed_height_still.url;

            var animateURL = gifArray[i].images.fixed_height.url;

            var gifImageElement = $("<img id='gif-img'>").attr("src", imgURL);

            gifImageElement.attr("data-still", imgURL);

            gifImageElement.attr("data-animate", animateURL);

            gifImageElement.addClass("my-3 mr-3");

            gifImageElement.attr("data-state", "still");

            //Append data to gif section
            gifDiv.append(gifImageElement);

            gifDiv.append("Rating: " + gifRating);

            $("#gif-section").prepend(gifDiv);
        }






    })




});

$(document.body).on("click", "#gif-img", function () {


    var state = $(this).attr("data-state");


    if (state === "still") {

        $(this).attr("src", $(this).attr("data-animate"));

        $(this).attr("data-state", "animate");

    } else {

        $(this).attr("src", $(this).attr("data-still"));

        $(this).attr("data-state", "still");


    }










});






