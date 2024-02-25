require('dotenv').config()

let express = require('express');
let app = express();
console.log("Hello World");

app.get("/",(req, res)=> {
    //res.send("Hello Express");
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + '/public'));

app.get("/json", (req,res) => {
    let message = process.env.MESSAGE_STYLE;
    console.log(message);
    if(message=="uppercase"){
        res.json({"message": "HELLO JSON"});
    }
    else
        res.json({"message": "Hello json"});
});





























 module.exports = app;
