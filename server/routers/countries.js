const {Router} = require('express');
const countryController = require('../controllers/countries')

const countryRouter = Router();

countryRouter.get('/', countryController.index)
countryRouter.get('/:name', countryController.showACountry)
countryRouter.post('/', countryController.createACountry)
countryRouter.delete('/:name', countryController.deleteACountry)
countryRouter.patch('/:name', countryController.updateACountry)

module.exports = countryRouter