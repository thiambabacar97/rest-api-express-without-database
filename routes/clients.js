var express = require('express');
var router = express.Router();

const clients = [
    { name: 'Babacr', age: 20 },
    { name: 'Moustapha', age: 10 },
    { name: 'Omar', age: 50 },
    { name: 'Aliou', age: 45 },
    { name: 'David', age: 25 }
];

const client = {
    name: 'Lucas',
    age: 25
}

router.get('/', function(req, res) {
    res.send(clients);
});

router.post('/', function(req, res) {
    res.send(client);
});

router.put('/', function(req, res) {
    res.send(client);
});

router.delete('/', function(req, res) {
    res.send(204);
});

module.exports = router;