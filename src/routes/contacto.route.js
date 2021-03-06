import { Router } from "express";
import {

    mostrarContacto,
    crearContacto,
    actualizarContacto,
    eliminarContacto,
    buscarUncontacto

} from '../controllers/contact.controller.js'

import cors from 'cors'
const route = Router();

route.use(cors());
//Rutas de los contactos
route.get('/contacto', mostrarContacto);
route.post('/contacto', crearContacto);
route.put('/contacto/:id_contacto', actualizarContacto);
route.delete('/contacto/:id_contacto', eliminarContacto);
route.get('/contacto/:id_contacto', buscarUncontacto);

export default route;