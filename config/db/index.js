const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://project3:12345689@cluster0.pmpxlzv.mongodb.net/test', {
           
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect Successfully!!');
    } catch (error) {
        console.log('Connect failure!!');
    }
}

module.exports = { connect };
