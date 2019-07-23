import '@babel/polyfill';
require('dotenv').config();
import express from 'express';
import * as bodyParser from 'body-parser';
import routes from './src/routes';
import { connectDb } from './src/models'

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({extended: true}))

app.use('/api', routes(router));

connectDb().then(async () => {
    app.listen(PORT, () => {
        console.log(`App running on port: ${PORT}`);
    });
}).catch( error => console.log(error));

export default app;