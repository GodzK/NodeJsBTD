const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');
app.use(morgan('combined'));
app.get('/', (req, res) => {
    res.render('pk114')})

app.listen(port ,()=>{
    console.log("listening on port %d" ,port);
});