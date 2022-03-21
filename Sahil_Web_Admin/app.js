// const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
var Contact = require('../Sahil_Web/model/condata');

// const http = '127.0.0.1';
const port = 8000;

// var Portfolio = mongoose.model('Portfolio', contactSchema);
var Con = Contact.DataCollection.find({});
// var Con = Contact.find({});

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('Adminindex.pug', params);
});
app.get("/DataBase",(req, res,next)=>{
    Con.exec((err, data)=>{
        if(err) throw err;
        res.render('DataBase.pug', {title:'My Bhai',record : data});
      });
  });

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});