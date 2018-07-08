/* Define database connection. Use mongoose connection*/
var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

/* Listen Mongoose connection events and out put the statues*/
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error:' + err);
});
mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected');
});

/* Reusable function to close Mongoose connection*/
gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through ' + msg);
  });
};

// For nodemon restart
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown' , function(){
    process.exit(0);
  });
});

require('./locations');
