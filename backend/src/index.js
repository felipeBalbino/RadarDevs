const express = require("express");
const mongoose = require("mongoose");
const routes = require("./router");

const app = express();

mongoose.connect('mongodb+srv://fbalbino:fbalbino@cluster0-2kr4g.mongodb.net/week10?retryWrites=true&w=majority',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);


app.listen(3333);