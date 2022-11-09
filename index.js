const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const viewPath = path.join(__dirname, 'viewFolder');

const app = express();


//for setting ejs templet engine
app.set('view engine', 'ejs');
app.set('views', viewPath);

//for loasded static file in express inbuilt function
app.use(express.static('assets'));

//middlewar for parsing data from form to server
app.use(express.urlencoded());


var contactList = [
    {
        name: 'manish',
        phone: '2324355446'
    },
    {
        name: 'bivishon',
        phone: '3253767536'
    },
    {
        name: 'brajesh',
        phone: '857874635'
    }
]

app.get('/', (req, res) => {
    // console.log(req)
    Contact.find({}, (err, contactListDB) => {
        //here empty object {} for quiry in db
        if (err) {
            console.log('error in fetching contact from DB')
            return;
        } else {
            return res.render('home', {
                title: "my contactList",
                contact_list: contactListDB
            });
        }
    })
})
app.post('/create-contact', (req, res) => {
    // console.log(req.body)
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, (err, newContact) => {
        if (err) {
            console.log('Error in creating contacts');
            return;
        } else {
            // console.log('##########******', newContact);
            res.redirect('back');
        }
    })

})

//for delete contact routing
app.get('/delete-contact', (req, res) => {
 //get the id from query in ul
    let id = req.query.id;
   //find the contact using id and delete
    Contact.findByIdAndDelete(id , (err) => {
      if(err){
        console.log('Error in Deleting contact from DB');
        return;
      }else{
        return res.redirect('back');
      }
    })

})

app.listen(port, (err) => {
    if (err) {
        console.log('Error !! is running on server')
    }
    console.log(`YuP !! my express server is running on port : ${port}`);
})