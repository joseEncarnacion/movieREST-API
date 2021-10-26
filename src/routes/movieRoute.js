const {Router} = require('express')
const router = Router()


const {getMovies, createMovie, updateMovie, getMovie, deleteMovie} = require('../controllers/ContMovie')

router.route('/') 
    .get(getMovies)
    .post(createMovie)

router.route('/:id')
    .get(getMovie)
    .put(updateMovie)
    .delete(deleteMovie)

module.exports = router