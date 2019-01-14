const mongoose    = require('mongoose');

const CitySchema = mongoose.Schema({
    name           : { type: String, require: true },
    src            : { type: String, require: true },
    average_price  : { type: String, require: true },
    
});





module.exports = mongoose.model('cities', CitySchema);
