const express = require('express');
const port = 8000;

const app = express();


app.get('/' , (req , res) => {
    res.send('cool @ it is running');
})

app.listen(port , (err) => {
    if(err){
        console.log('Error !! is running on server')
    }
    console.log(`YuP !! my express server is running on port : ${port}`);
})