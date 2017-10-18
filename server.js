const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'client/dist')));

require('./server/config/mongoose');
const routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})