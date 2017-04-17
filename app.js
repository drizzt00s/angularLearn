var connect = require('connect');
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  //app.set('views', __dirname + '/angularjs');
  //app.set('view engine', 'ejs');
  //app.use(partials());
  //app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({
       secret:"msy",
       key:"kui"//
     }));
 app.use(app.router);
  app.use(express.static(path.join(__dirname,'')));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

