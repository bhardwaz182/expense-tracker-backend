const mongoose = require( 'mongoose' );

const workshopSchema = new mongoose.Schema({
    what: {
        type: String,
        required: true,
    },
    who: {
        type: String,
        required: true,
    },
    when: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    included:{
        type: [{
            name: String,
            value: Boolean,
            cost: Number
        }],
        required: true,
    }
});

module.exports = mongoose.model( 'Workshop', workshopSchema );