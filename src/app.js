import express from 'express'
import infoRoutes from './routes/info.route.js'
import contactRoutes from './routes/contacto.route.js'

const app = express();

//middlewares

app.use(express.json());


app.use(infoRoutes);
app.use(contactRoutes);


export default app;
