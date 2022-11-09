const express = require('express');
const path = require('path');
const port = 8000;

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
    return res.render('home', {
        title: "my contactList" , 
        contact_list : contactList
    });
})
app.post('/create-contact', (req, res) => {
    // console.log(req.body)
    contactList.push(req.body);
    return res.redirect('/');

})

//for delete contact routing
app.get('/delete-contact' , (req , res) => {
    // console.log(req.query);
    let phon_no = req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phon_no);

    if(contactIndex != -1){
        contactList.splice(contactIndex, 1);
    }
    return res.redirect('back');
})

app.listen(port, (err) => {
    if (err) {
        console.log('Error !! is running on server')
    }
    console.log(`YuP !! my express server is running on port : ${port}`);
})