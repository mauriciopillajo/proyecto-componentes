const express = require('express')
const cors = require('cors')

const app = express()

app.get('/without-cors', (req, res, next) => {
  res.json({msg: 'Works! 🎉'}) 
})

app.get('/with-cors', cors(), (req, res, next) => {
  res.json({msg: 'Works! 🎉'}) 
})


app.get("/", cors(), (req, res, next) =>{
    //console.log(req.body)
    //console.log('Backend con NodeJS - Express + CRUD API REST + CosmosDB')
    res.json({msg: 'Backend con NodeJS - Express + CRUD API REST + CosmosDB'});
});

app.options('*', cors())
var insertupdate = require('./routes/insertupdate');

app.use(insertupdate);



app.post("/insertupdate",(req, res) =>{
    console.log(req.body)
    //res.send("Usuario nuevo ingresado post")
})



//app.use("/users/",require("./routes/usersRoute"))

const PORT = process.env.PORT || 3001;
app.listen(PORT, process.env.IP, function(){
    console.log("Running on PORT: ", PORT);
});

