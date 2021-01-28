const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, './db.json'))

//const middlewares = jsonServer.defaults()

//const passport = require('passport')
//const strategy =require('passport-http').BaseStrategy;

const port = 8080;

server.use(router)
server.listen(port, () => {
    console.log('listening on port 8080')
})

//jsonServer.use(passport.initialize());
//jsonServer.use(passport.session());