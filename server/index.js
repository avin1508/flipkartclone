import express, { Router } from 'express'
import dotenv from 'dotenv'
import connection from './db/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';





const app = express();

dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


connection( USERNAME,PASSWORD);






app.listen(PORT,()=>{
    console.log(`server is runnning on port ${PORT}`)
}
);
DefaultData();


