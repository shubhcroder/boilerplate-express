require('dotenv').config()

let bodyParser = require('body-parser');
let express = require('express');
const res = require('express/lib/response');
let app = express();
console.log("Hello World");

app.use(
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json()
);

app.route("/name").get((req, res, next) => {
    let firstName = req.query.first;
    let lastName = req.query.last;
    res.send({"name": `${firstName} ${lastName}`});
    next();
})
.post((req, res) => {
    console.log(req.body.first, req.body.last);
    res.json({
        name: `${req.body.first} ${req.body.last}`
    });
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get("/now", (req, res, next) =>{
    req.time = new Date().toString();
    next();
},
(req, res) =>{
    res.send({"time":req.time});
});

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

app.get("/:word/echo", (req, res, next) => {
    let wordParam = req.params.word;
    res.send({"echo":wordParam});
    next();
});

app.get("/name", (req, res, next) => {
    let firstName = req.query.first;
    let lastName = req.query.last;
    res.send({"name": `${firstName} ${lastName}`});
    next();
});























 module.exports = app;
