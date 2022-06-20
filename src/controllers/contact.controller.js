import { contacto } from "../models/contacto.js";

export const mostrarContacto = async (req, res) => {

    try {

        const verContacto = await contacto.findAll()
        res.json(verContacto)


    } catch (error) {

        return res.status(500).json({ message: error.message });

    }

}

export const crearContacto = async (req, res) => {

    try {

        const { correo, Telefono, direccion, celular, idIndormacion } = req.body

        const newContacto = await contacto.create({

            correo,
            Telefono,
            direccion,
            celular,
            idIndormacion

        });

        res.json(newContacto)

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }


}

export const actualizarContacto = async (req, res) => {

    try {

        const { id_contacto } = req.params
        const update = await contacto.findOne({


            where:{
                id_contacto

            }


        });

        update.set(req.body)
        await update.save()
        return res.json(update)


        console.log(update);
        res.json(update);

    } catch (error) {

        return res.status(500).json({ message: error.message });


    }




}

export const eliminarContacto = async (req, res) => {

    try {

        const { id_contacto } = req.params
        const elim = await contacto.destroy({

            where: {

                id_contacto

            },

        })

        console.log(elim);
        res.sendStatus(204);


    } catch (error) {

        return res.status(500).json({ message: error.message });

    }

}

export const buscarUncontacto = async (req, res) => {

    try {


        const { id_contacto } = req.params
        const uno = await contacto.findOne({

            where: {

                id_contacto

            },

        });

        if (!uno) {

            return res.status(404).json({ message: 'ESE CONTACTO NO EXISTE' });

        }

        res.json(uno)

    } catch (error) {

        return res.status(500).json({ message: error.message });


    }


}
