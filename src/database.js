const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-app';

mongoose.connect(URI, {useNewUrlParser: true})
    .then( db => console.log('DB conectada'))
    .catch(err => console.error(err));
    
module.exports = mongoose;