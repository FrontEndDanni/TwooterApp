const express = require('express');
const path = require('path');
const app = express();
const port = 2000;

const user = {
    firstName: 'Danni',
    lastName: 'Dull'
}

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

app.set('view engine', 'ejs')


//creating route: site homepage
app.get('/', (req,res) =>{
    res.render('site/home')
})

//dynamic routes: 
app.get('/login', (req,res) => {
    res.render('authentication/login', {user: user})
})

app.get('/register', (req,res) => {
    res.render('authentication/register', {user: user})
})

app.get('/profile', (req,res) => {
    res.render('site/profile', {user:user})
})

app.get('/user', (req,res) => {
    res.render('site/user', {user:user})
})


app.use(express.static(path.join(__dirname, 'styling')))