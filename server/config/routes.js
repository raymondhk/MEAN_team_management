const players = require('../controllers/players.js');
const path = require('path');

module.exports = (app) => {
    app.get('/players', (req, res) => {
        players.show(req, res);
    });
    app.post('/players', (req, res) => {
        players.create(req, res);
    });
    app.delete('/players/:id', (req, res) => {
        players.delete(req, res);
    });
    app.put('/players/:id', (req, res, next) => {
        console.log(next)
        players.update(req, res);
    })
    app.get("/*", (req, res) => {
        res.sendFile(path.resolve("./client/dist/index.html"));
    });
};