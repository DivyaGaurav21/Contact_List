const express = require('express');
const path = require('path');
const port = 8000;

const viewPath = path.join(__dirname , 'viewFolder');

const app = express();


//for setting ejs templet engine
app.set('view engine' , 'ejs');
app.set('views' , viewPath);

app.get('/' , (req , res) => {
    // console.log(req)
   return res.render('home' , {title : "my contactList"});
})

app.listen(port , (err) => {
    if(err){
        console.log('Error !! is running on server')
    }
    console.log(`YuP !! my express server is running on port : ${port}`);
})