const Country = require('../models/Country');

//first function is a RESTFUL route
//Usually its deigned as an index


async function index(req, res) {
    try {
        const allCountries = await Country.getAll()
        res.status(200).send(allCountries)
    } catch (err){
        res.status(500).send({'error': err.message})
    }
    
}

module.exports = { index }