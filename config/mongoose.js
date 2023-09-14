const mongoose = require('mongoose');

MongoURL ="mongodb+srv://sumanhembram60:1234@cluster0.ekheqxv.mongodb.net/?retryWrites=true&w=majority";

//connect to app to mongodb
mongoose.connect(MongoURL)
.then(()=>console.log('DB Connected Sucessfully'))
.catch((err)=>console.log(`Connetion Error in Mongodb ${err}`));
