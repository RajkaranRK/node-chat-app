const express = require('express');
const path = require('path');

var mainPath  = path.join(__dirname,'../public');


var app = express();
app.use(express.static(mainPath));



app.listen(3000,()=>{
    console.log('App is listening at port 3000');
})

