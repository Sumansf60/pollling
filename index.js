const express = require('express');
const port = 9000;
const app = express();

const db= require("./config/mongoose");
const MongoStore= require("connect-mongo");



const session = require('express-session');

app.use(express.urlencoded());

app.use(session({
    name: 'polling',
    
    secret: "blahsomething",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge : (1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb+srv://sumanhembram60:1234@cluster0.ekheqxv.mongodb.net/?retryWrites=true&w=majority',
            mongooseConnection: db,
            autoRemove: false
        },
        function(err){
            console.log(err || 'connect-mongodb setup ok')
        }
    )
}));





app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log(`Error in connection the database ${err}`);
        return;
    }
    console.log(`Server is running at the port ${port}`);
})


// INSERT QUESTION method - POST url - localhost:9000/question/create
// KEY - title  VALUE - what question you like

// DELETE QUESTION method - DELETE url - localhost:9000/question/:id/delete

// CREATING OPTION method - POST url - localhost:9000/question/:id/options/create
// KEY - text VALUE - Options
// if you add more options then at one time you can add only one options to the particular questions

// SEE QUESTIONS AND OPTIONS method - GET url - localhost:9000/question/:id

// DELETE PARTICULAR OPTIONS method - GET url - localhost:9000/option/:id/delete

// ADD VOTE method - POST url - localhost:9000/option/:id/add_vote
