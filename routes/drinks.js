var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const drinksData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/drinks.json')));

router.get('/', function (req, res, next) {

    res.render('drinks', { drinks: drinksData });

});

router.get('/:id', function (req, res, next) {
    const drinkId = parseInt(req.params.id);

    const drink = drinksData.find(drink => drinkId == drink.id);

    res.render('drinkDetails', { drink: drink });
});


router.post('/', function (req, res, next) {

});


router.delete('/:id', function (req, res, next) {

});

module.exports = router;