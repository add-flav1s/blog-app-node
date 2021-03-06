const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'categorias',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
});

mongoose.model('posts', Post);