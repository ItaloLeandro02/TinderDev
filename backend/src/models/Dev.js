const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev', // Referenciando, como uma chave estrangeira em um banco relacional
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
        timestamps: true, // Cria duas tabelas CreatedAt, UpdatedAt
    });

module.exports = model('Dev', DevSchema);