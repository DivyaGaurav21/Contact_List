//required library
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/contact_list_db')

//connect to the database
const db = mongoose.connection;

//checking the connection is succesful or not
db.on('error' , console.error.bind(console , 'error in connecting DB'));

//up and runnig then print message
db.once('open' , function(){
    console.log('ohk :) successfully connected to DB')
})


