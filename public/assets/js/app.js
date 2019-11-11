$(function() {

    // Plus button is clicked to add a new burger
    $("#submit").click(function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("You clicked submit");
        var newBurger = {
          name: $("#name").val().trim(),
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });    
});