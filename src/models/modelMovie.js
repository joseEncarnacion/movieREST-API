const mongoose = require('mongoose')
const {Schema, model} = mongoose


const movieSchema = new Schema({
    titulo: String,
    descripcion : String,
    imagen: String,
    genero: String
}, {
    date: Date.now
} )



module.exports = model('movie', movieSchema)