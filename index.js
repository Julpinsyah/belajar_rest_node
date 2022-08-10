import express  from 'express';
import db from './config/database.js';
import router from './routes/router.js';

import cors from 'cors';

const app = express();
const port = 5000;

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {console.log('App listening on port ' + port)});