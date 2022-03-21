// const http = require("http");
const bodyparser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();
const Contact = require('./model/condata');
const { response } = require("express");
const { sendStatus } = require("express/lib/response");
var router = express.Router();

// const http = '127.0.0.1';
const port = 5000;

var Con = Contact.DataCollection.find({});

var name = "";
var email = "";
var weburl = "";
var message = "";


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded());


// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('index.pug', params);
})

app.get("/weekend-mode", (req, res)=>{ 
    const params = { }
    res.status(200).render('weekend-mode.pug', params);
});
app.get("/message", (req, res)=>{ 
    const params = { }
    res.status(200).render('message.pug', params);
});
app.post('/message',(req, res)=>{
    name = req.body.name;
    email = req.body.email;
    weburl = req.body.weburl;
    message = req.body.message;
    var msgdetail = new Contact.DataCollection({
        name: name,
        email: email,
        weburl: weburl,
        message: message
    });
    msgdetail.save().then(()=>{
        res.send("This item has been saved to the database");
        console.log('Status sended..');
        // res.redirect('/');
    }).catch(()=>{
        res.status(400).send('Can not sendStatus..');
    })
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

module.exports = router;