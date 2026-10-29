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

async function showACountry(req, res){
    try {
        let name = req.params.name 
        const country = await Country.getOneByCountryName(name)
        res.status(200).json(country)

    } catch {
        res.status(404).json({error: err.message})

    }
}

async function createACountry(req, res){
    try {
        let data = req.params.body
        const newCountry = await Country.create(data)
        res.status(201).json(newCountry)
    } catch  (err) {
        res.status(400).json({err: err.message})
    }
}

async function updateACountry(req, res){

}

async function deleteACountry(req, res) {
    try {
        let name = req.params.name
        const country = await Country.getOneByCountryName(name)
        const result = await Country.destroy(country)
        res.status(204).end()
    } catch (err){
        res.status(404).json({error: err.message})

    }
    
}

module.exports = { index, showACountry, createACountry, deleteACountry }