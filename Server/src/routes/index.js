const {login} = require('../controllers/login');
const {getCharById} = require('../controllers/getCharsById');
const {postFav, deleteFav} = require('../controllers/handleFavorites');

const router = require('express').Router();

//crearemos las rutas:
router.get('/character/:id', getCharById );

router.get('/login', login );

router.post('/fav', postFav );

router.delete('/fav/:id', deleteFav );

module.exports = router;