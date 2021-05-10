const express = require('express');
import route from './src/routes'
import config from './src/config/config.json'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app)

const port = config.development.serverPort;

app.listen(port, () => {
    console.log('App is now running at port ', port)
})