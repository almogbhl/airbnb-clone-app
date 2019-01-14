const mongoose    = require('mongoose');

const PostSchema = mongoose.Schema({
    avatar            : { type: String, require: false },
    fisrt_name         : { type: String, require: true },
    date           : { type: String, require: true },
    comment       : { type: String, require: true, min: 3 }
});





module.exports = mongoose.model('posts', PostSchema);
