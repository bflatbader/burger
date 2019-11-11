$(function() {
    // Shopping bag button is clicked to order burger
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
            
        var newDevouredState = {
          devoured: true
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("ordered burger " + id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

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