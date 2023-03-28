var express = require("express");
var app = express();

var insertupdate = require('./routes/insertupdate');

app.use(insertupdate);

const PORT = process.env.PORT || 5000;
app.listen(PORT, process.env.IP, function(){
    console.log("Running on PORT: ", PORT);
});

