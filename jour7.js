var fs = require("fs");

fs.readFile("jour7.txt" , function(err, data){
    if (err){
        console.error(err);
        return;
    }
    console.log(data.toString())
})