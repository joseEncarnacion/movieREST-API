const controlMovie ={};

const Movies = require('../models/modelMovie')

controlMovie.getMovies = async (req, res) =>{
    const movies =  await Movies.find()
    res.send(movies)
}

controlMovie.createMovie = async (req, res) =>{
    const {titulo,descripcion, imagen, genero, date}  = req.body
    const newMovie = new Movies({
        titulo,
        descripcion ,
        imagen,
        genero,
        date
    })
    await newMovie.save()
    res.json({massage: 'Card creada'})
}


controlMovie.updateMovie = async (req, res) =>{
    const {titulo,descripcion, imagen, genero, date}  = req.body
        await Movies.findByIdAndUpdate(req.params.id, {
            titulo,
            descripcion ,
            imagen,
            genero,
            date
        })
    res.json({massage:'peliculas actualizada'})
}


controlMovie.getMovie = async (req, res) =>{
    const movie =  await Movies.findById(req.params.id)

    res.json({massage: 'Card Movie obtenida'})
}


controlMovie.deleteMovie = async(req, res) =>{
    await Movies.findByIdAndDelete(req.params.id)
    res.send({massage: 'Card Eliminada'})
}

module.exports = controlMovie