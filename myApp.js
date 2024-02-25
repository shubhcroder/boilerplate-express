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
    //const mySecret = process.env['MESSAGE_STYLE'];
    const note = "Hello json";
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json(
            {"message": note.toUpperCase()}
        );
    }else{
        res.json(
            {"message": note}
        );
    }
});





























 module.exports = app;
