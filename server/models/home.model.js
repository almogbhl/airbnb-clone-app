const mongoose    = require('mongoose');

const HomeSchema = mongoose.Schema({
    city            : { type: String, require: true },
    country         : { type: String, require: true },
    price           : { type: Number, require: true },
    superhost       : { type: Boolean, require: true },
    img             : { type: String, require: true },
    rating_stars    : { type: Number, require: true },
    rating_total    : { type: Number, require: true },
    cancellation    : { type: Boolean, require: true},
    room_id         : { type: String, require: true}
}
);





module.exports = mongoose.model('homes', HomeSchema);
