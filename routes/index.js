const express = require('express');
const router = express.Router();// el metodo Router() de express obtiene un objeto donde almacena las rutas

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/carrierSignIn', (req, res) => {
    res.render('carrierSignIn')
});

router.get('/driverSignIn', (req, res) => {
    res.render('driverSignIn')
});

router.get('/loadOwnerSignIn', (req, res) => {
    res.render('loadOwnerSignIn')
});

router.get('/whPickUpSignIn', (req, res) => {
    res.render('whPickUpSignIn')
});

router.get('/whReceiverSignIn', (req, res) => {
    res.render('whReceiverSignIn')
});

module.exports = router;