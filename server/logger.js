//middleware that logs the http method being used, and the endpoint of the request coming from
// each login request that's coming in, this is the js that gets executed.

const logger = (req, res, next) => {
    console.log(req.method, req.originalUrl) 
    next()
}

module.exports = logger

//method and originURL are client parameters. For example when client posts something through
//interface - this logs the method in and also the URL its coming from.




