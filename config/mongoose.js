const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Gyaneshwarmaddela:pass@cluster0.evw33.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error',console.error.bind
(console, "Error Connecting to MongoDB"));

db.once('open',function()
{
    console.log('Connected to Database');
})

module.exports = db;