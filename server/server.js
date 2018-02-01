const express = require('express');
const path = require('path');

var mainPath  = path.join(__dirname,'../public');
var port = process.env.PORT||3000;


var app = express();
app.use(express.static(mainPath));

app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
})

