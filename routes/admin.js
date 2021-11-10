const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Admin page');
});

router.get('/posts', (req, res) => {
    res.send('Admin posts page');
});

router.get('/categorias', (req, res) => {
    res.send('Admin categorias page');
});



module.exports = router;