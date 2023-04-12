var express = require("express");
var cors = require("cors")

var app = express();

var insertupdate = require('./routes/insertupdate');

app.use(insertupdate);
app.use(cors);
app.use(express.json());

app.post("/insertupdate",(req, res) =>{
    console.log(req.body)
    //res.send("Usuario nuevo ingresado post")
})

app.get("/listar", (req, res) =>{
    console.log(req.body)
    res.send('Backend con NodeJS - Express + CRUD API REST + CosmosDB');
});

//app.use("/users/",require("./routes/usersRoute"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, process.env.IP, function(){
    console.log("Running on PORT: ", PORT);
});

