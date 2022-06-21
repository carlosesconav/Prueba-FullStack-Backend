import { Router } from "express";
import {

    crearInfos,
    getInfos,
    actualizarInfo,
    eliminarInfo,
    obtenerUno,
    obtenerContactoInfo

} from '../controllers/info.controller.js';

import cors from 'cors';
const route = Router();

route.use(cors());

//Rutas de la informacion
route.get('/informacion', getInfos);
route.post('/informacion', crearInfos);
route.put('/informacion/:id_info', actualizarInfo);
route.delete('/informacion/:id_info', eliminarInfo);
route.get('/informacion/:id_info', obtenerUno);
route.get('/informacion/:id_info/contacto', obtenerContactoInfo);



export default route;

