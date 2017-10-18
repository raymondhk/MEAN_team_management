const mongoose = require('mongoose'),
Schema = mongoose.Schema,
PlayerSchema = new Schema({
    name: { type: String, required: [true, "Name is Required!"], minlength: [4, "Player Name must be at least 4 characters long!"] },
    position: { type: String },
    game: [{ status: {type: String, default: 'undecided'} },{ status: {type: String, default: 'undecided'} },{ status: {type: String, default: 'undecided'} }]
})
const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;