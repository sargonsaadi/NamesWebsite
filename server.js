var express = require('express');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path =require('path');
var app = express();
var mysql = require('mysql')
var bcrypt = require('bcrypt')
var session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SESSION
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   cookie: { maxAge: 600000 }
cookie: {  }

}))


var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening http://%s:%s", host, port);
});



// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'wq4t9hwqqe8',
//     database: 'namesdb'
// })

// connection.connect(function(err) {
//     if (err) {
//         throw err
//     }else{
//         console.log('You are now connected...')
        
//         connection.query("INSERT INTO name (word) VALUES ('akkad')", function(err, result) {
//             if (err) {
//                 throw err
//             } else{
                
//             }
//         })
//     }
// })

// app.get('/',function(req,res){
//     connection.query('SELECT * FROM name', function(err, results) {
//         if (err) throw err
//         for(let i=0;i<results.length;i++)
//         {
//             console.log(results[i].id)
//         }
//     })
// })

// connection.end();
app.use(express.static( __dirname + '/AngularApp/dist/AngularApp' ));  // <------ CONNECTS WITH ANGULAR APP
// app.use(express.static(path.join(__dirname, './static')));

// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
// mongoose.Promise = global.Promise;

// require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./AngularApp/dist/AngularApp/index.html"))
});

