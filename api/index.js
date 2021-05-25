const express = require ('express');
const routes = require ('./src/routes/routes');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

app.use('/api.appmed', routes);

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.listen(process.env.EXTERNAL_PORT)

// app.listen(4001, () => {
//     console.log("API está funcionando na porta 4001")
// });

