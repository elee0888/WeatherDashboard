$( document ).ready(function() {
    
  $('#searchBtn').on ('click',function(){
       // 5 day forecast call
      const apiKey = '&apikey=63d3c3ee188d89772b5fad7611b9dc22';
      var city = $('#city-Name').val();
      var renderWeather = function (city) {
          var baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=0193e7f192fce99c472b76263f1a3270";  
              $.ajax({
                  url: baseUrl,
                  method: "GET",
                  
              }).then(function (response) {
                  console.log(response);
                  
                  var icon = response.weather[0].icon;
                  var imgSrc =  "https://openweathermap.org/img/wn/" + icon + ".png";
                  var img =  $("<img>").attr("src", imgSrc);
                  img.attr('alt', response.weather[0].main);

                  // $("#forecast").removeClass("display");
                  $("#city-Name").text(response.name + ", " + response.sys.country + " " + moment().format('l'));
                  
                  $("#imgIcon").html(img);
                  $("#temp").text(response.main.temp + " °F");
                  $("#temp").wrap("<strong></strong>");
                  $("#humidity").text(response.main.humidity + "%");
                  $("#humidity").wrap("<strong></strong>");
                  $("#wind-speed").text(response.wind.speed + " MPH");
                  $("#wind-speed").wrap("<strong></strong>");


                  
              });
              
      }
      var fiveDay = function() {
          $.ajax({
              url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=0193e7f192fce99c472b76263f1a3270",
              method: "GET",
              
          }).then(function (response) {
              console.log(response);
              //Day 1 forecast render//
              var code6 = response.list[6].weather[0].icon;
          
              var imgSrc6 = "https://openweathermap.org/img/wn/" + code6 + ".png";
              
              var img6 = $("<img>").attr("src", imgSrc6);

              //Day 2//

              var code14 = response.list[14].weather[0].icon;
          
              var imgSrc14 = "https://openweathermap.org/img/wn/" + code14 + ".png";
              
              var img14 = $("<img>").attr("src", imgSrc14);

              //Day 3//

              var code22 = response.list[22].weather[0].icon;
          
              var imgSrc22 = "https://openweathermap.org/img/wn/" + code22 + ".png";
          
              var img22 = $("<img>").attr("src", imgSrc22);

              //Day 4//

              var code30 = response.list[30].weather[0].icon;
          
              var imgSrc30 = "https://openweathermap.org/img/wn/" + code30 + ".png";
          
              var img30 = $("<img>").attr("src", imgSrc30);

              //Day 5//

              var code38 = response.list[38].weather[0].icon;
              
              var imgSrc38 = "https://openweathermap.org/img/wn/" + code38 + ".png";
          
              var img38 = $("<img>").attr("src", imgSrc38);

              // day 1 attributes//
              $("#dayOne h7").text(moment().add(1, "days").format("l")); 
              $("#dayOne .img-Icon-5").html(img6);
              $("#dayOne .temp-5").text("Temp: " + response.list[6].main.temp + " °F");
              $("#dayOne .humidity-5").text("Humidity: " + response.list[6].main.humidity + "%");

              // day 2 attributes//
              $("#dayTwo h7").text(moment().add(2, "days").format("l"));
              $("#dayTwo .img-Icon-5").html(img14);
              $("#dayTwo .temp-5").text("Temp: " + response.list[14].main.temp + " °F");
              $("#dayTwo .humidity-5").text("Humidity: " + response.list[14].main.humidity + "%");

              //day 3 attributes//
              $("#dayThree h7").text(moment().add(3, "days").format("l"));
              $("#dayThree .img-Icon-5").html(img22);
              $("#dayThree .temp-5").text("Temp: " + response.list[22].main.temp + " °F");
              $("#dayThree .humidity-5").text("Humidity: " + response.list[22].main.humidity + "%");

              // day 4 attributes//
              $("#dayFour h7").text(moment().add(4, "days").format("l"));
              $("#dayFour .img-Icon-5").html(img30);
              $("#dayFour .temp-5").text("Temp: " + response.list[30].main.temp + " °F");
              $("#dayFour .humidity-5").text("Humidity: " + response.list[30].main.humidity + "%");

              //Day 5 attributes//
              $("#dayFive h7").text(moment().add(5, "days").format("l"));
              $("#dayFive .img-Icon-5").html(img38);
              $("#dayFive .temp-5").text("Temp: " + response.list[38].main.temp + " °F");
              $("#dayFive .humidity-5").text("Humidity: " + response.list[38].main.humidity + "%");

          }); 

      }
      var renderUV = function() {
          var queryURL = "http://api.openweathermap.org/data/2.5/uvi?" + "&appid=0193e7f192fce99c472b76263f1a3270" + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
          $.ajax({
              url: queryURL,
              method: "GET",
              
          }).then(function (response) {
              console.log("UV Index below:");
              console.log(response);
          }); 

      }
      
  
  renderWeather(city);        
  fiveDay();
  renderUV();  
  
  });
     
});

//$('#searchBtn').on ('click',function(){//