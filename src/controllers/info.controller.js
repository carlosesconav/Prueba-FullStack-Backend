// import { info } from 'console';
import { contacto } from '../models/contacto.js';
import { infocontact } from '../models/info.js';


// Buscar todos los datos

export const getInfos = async (req, res) => {

    try {


        const verinfo = await infocontact.findAll()
        res.json(verinfo)


    } catch (error) {


        return res.status(500).json({ message: error.message });

    }


}

//Crear datos

export const crearInfos = async (req, res) => {

    try {

        const { nombre, apellido } = req.body
        const newinfo = await infocontact.create({

            nombre,
            apellido

        });

        console.log(newinfo)

        res.send('CREANDO INFORMACION');



    } catch (error) {

        return res.status(500).json({ message: error.message });

    }

}

//Actualizar datos

export const actualizarInfo = async (req, res) => {

    try {

        const { id_info } = req.params;
        const { nombre, apellido } = req.body;


        const buscarUno = await infocontact.findByPk(id_info);

        buscarUno.nombre = nombre
        buscarUno.apellido = apellido
        await buscarUno.save()

        console.log(buscarUno);
        res.json(buscarUno);
        // console.log(req.body);
        // console.log('DATOS ACTUALIZADOS')



    } catch (error) {

        return res.status(500).json({ message: error.message });

    }


}

//Eliminar datos

export const eliminarInfo = async (req, res) => {

    try {


        const { id_info } = req.params;
        const elim_info = await infocontact.destroy({

            where: {

                id_info,

            },


        });

        if (!elim_info) {

            return res.status(404).json({ message: 'ESE CONTACTO NO EXISTE' });

        }

        console.log(elim_info)
        console.log('Se elimino el registro')
        res.sendStatus(204)


    } catch (error) {

        return res.status(500).json({ message: error.message });

    }




}

export const obtenerUno = async (req, res) => {

    try {

        const { id_info } = req.params
        const buscarUno = await infocontact.findOne({

            where: {

                id_info,

            },

        });

        if (!buscarUno) {

            return res.status(404).json({ message: 'ESE CONTACTO NO EXISTE' });

        }

        res.json(buscarUno)


    } catch (error) {

        return res.status(500).json({ message: error.message });

    }

}

export const obtenerContactoInfo = async (req, res)=>{

    try{

        
        const { id_info } = req.params;
        const { idIndormacion } = req.params;
        const verRela= await contacto.findAll({

            where: {

                idIndormacion:id_info,

            },


        });

        res.json(verRela);
        console.log(verRela);



    }catch(error){

        return res.status(500).json({ message: error.message });


    }


}