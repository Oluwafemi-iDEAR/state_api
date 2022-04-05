const express = require("express");

const server = express(); //create the server app

//routes/endpoints
server.get("/", function(request, response){

    response.send({
        message: "This is API is live",
        code: "success",
        data: []
    })

})







//open server to connections
server.listen(4000, function(){
    console.log('Server is listening ...');
})