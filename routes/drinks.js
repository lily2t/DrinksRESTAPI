var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const drinksData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/drinks.json')));
const drinksDataPath = path.join(__dirname, '../data/drinks.json');

router.get('/', function (req, res, next) {

    res.render('drinks', { drinks: drinksData });

});

router.get('/:id', function (req, res, next) {
    const drinkId = parseInt(req.params.id);

    const drink = drinksData.find(drink => drinkId == drink.id);

    res.render('drinkDetails', { drink: drink });
});


router.post('/', function (req, res, next) {

    const { name, ingredients, description } = req.body;


    if (!name || !ingredients || !description) {
        return res.status(400).send('Invalid request. Please provide name, ingredients, and description.');
    }


    const newDrink = {
        id: drinksData.length + 1,
        name,
        ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
        description,
    };


    drinksData.push(newDrink);


    
    fs.writeFileSync(drinksDataPath, JSON.stringify(drinksData, null, 2));

    res.status(201).json(newDrink);
});

router.delete('/:id', (req, res, next) => {

    const drinkId = parseInt(req.params.id);

    const drinkIndex = drinksData.findIndex(drink => drink.id === drinkId);

    if (drinkIndex === -1) {
        return res.status(404).send('Drink not found');
    }

    const deletedDrink = drinksData.splice(drinkIndex, 1)[0];

    fs.writeFileSync(drinksDataPath, JSON.stringify(drinksData, null, 2));

    res.status(200).json(deletedDrink);
});


module.exports = router;