const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('../Inventory-Management/src/Routes/routes')

const app = express();
app.use(bodyParser.json())


app.use('/', route)

mongoose.connect("mongodb+srv://Adhish-1998-DataBase:vQrIj9jTyDzRssqt@cluster0.af5tq.mongodb.net/Inventory-Database", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});