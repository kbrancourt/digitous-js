const { get } = require("request");
var request = require("request");

//countries
var countriesNames = [];

function getCountries(list){
    request.get("https://restcountries.eu/rest/v1/all", function(error, response, body){

    var names = JSON.parse(body);

    for(var i = 0; i<names.length; i++){            
        console.log(names[i].name);
    }
    return countriesNames.push(names[i]);
})
}
getCountries()