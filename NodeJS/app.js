const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/currenttime', function(req, res) {
    res.send('<h1>' + new Date().toISOString() + '</h1>')
});

app.get('/', function(req, res) {
    res.send('<form action="/store-user" method="POST"><label>What\'s your name?</label><input type="text" name="username"><button>Save</button></form>')
});

app.post('/store-user', function(req, res) {
    const userName = req.body.username;
    console.log(userName);
    res.send('<h1>Now we have your name!</h1>');
});

app.listen(3000);
