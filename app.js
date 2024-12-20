var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const customerRoutes= require('./routes/customerRoutes');
const orderRoutes= require('./routes/orderRoutes');
const employeeRoutes= require('./routes/employeeRoutes');
const officeRoute= require('./routes/officeRoutes');
const orderDetailRoute= require('./routes/orderdetailRoute');
const paymentRoute=require('./routes/paymentRoutes');
const productRoute= require('./routes/productRoute');
const productlineRoute= require('./routes/productLineRoutes');


// Import the Sequelize instance 
const db = require('./models');  

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//API routes

app.use('/api',customerRoutes);
app.use('/api',orderRoutes);
app.use('/api',employeeRoutes);
app.use('/api',officeRoute)
app.use('/api',productlineRoute);
app.use('/api',productRoute);
app.use('/api',orderDetailRoute);
app.use('/api',paymentRoute);


// Test the database connection
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  // Sync the models with the database
  db.sequelize.sync({ alter: false }) // Use `force: true` to recreate tables if needed
  .then(() => {
    console.log('Database and tables synced successfully!');
  })
  .catch((error) => console.error('Sync error:', error));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
