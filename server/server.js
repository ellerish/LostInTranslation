const jsonServer = require('json-server');
const passport = require('passport');
const Users = require('../db/users');
const Tokens = require('./token');
const router = jsonServer.Router();
const app = jsonServer();

const port = 8080;
const server = require('http').Server(app);

server.listen(port, () => {
    console.log('Starting server on port ' + port);
});

router.post('/login', passport.authenticate('local'), (req, res) => {

    res.status(204).send();
});

router.post('/signup', function(req, res){

    const created = Users.createUser(req.body.userId, req.body.password);

    if(! created){
        res.status(400).send();
        return;
    }

    passport.authenticate('local')(req, res, () => {
        req.session.save((err) => {
            if (err) {
                return (err);
            }

            res.status(204).send();
        });
    });
});

router.post('/logout', function(req, res){

    req.logout();
    res.status(204).send();
});


router.post('/wstoken', function (req, res) {

    if(! req.user){
        res.status(401).send();
        return;
    }

    const t = Tokens.createToken(req.user.id);

    res.status(201).json({wstoken: t});
});

router.get('/user', function (req, res) {

    if(! req.user){
        res.status(401).send();
        return;
    }

    res.status(200).json({userId: req.user.id});
});


module.exports = router;