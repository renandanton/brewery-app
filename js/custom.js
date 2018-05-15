$(document).ready(function() {

  
  getRandomBeer();
  
  
  $('#random').click(function() {
    getRandomBeer();
  });
  
});

function getRandomBeer() {
  const uri = "http://localhost:8080/random";
  $.getJSON(uri, function(result){
    var data = result.data;      
    console.dir(data);
    if (data.name != "" && data.name != null ) {
      var name = data.name;
    } else {
      var name = "unknowing name";
    }
    
    if (data.abv != "" && data.abv != null) {      
      var abv = data.abv;
    } else {
      var abv = "unknowing abv";
    }
    
    if (data.description != "" && data.description != null) {
      var desc = data.description;
    } else {
      var desc = "No description available";
    }
    
    if (data.labels.large != "" && data.labels.large != null) {
      var img = data.labels.large;
    } else {
      var img = "https://vignette.wikia.nocookie.net/breakingbad/images/d/dd/Unknown.png";
    }
    
    if (data.breweries.length > 0) {
      if (data.breweries[0].locations.length > 0) {
          var location =  data.breweries[0].locations[0];
          console.dir(location);
          var address = "Brewery Address: " + location.streetAddress + "," + location.region + " - " + location.country.name;
      }
    } else {
       const address = "Brewery unknowing location."
    }      
    $("#block-title").html("<h2>"+name+"</h2>");
    $("#block-image").html("<img src='"+img+"'>");
    $("#abv").html("<p>The alcohol percentage (abv): "+abv+"%</p>");
    $("#desc").html("<p>"+desc+"<p>");
    $("#address").html("<p>"+address+"<p>");      
  });
}

