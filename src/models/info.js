import { info } from 'console';
import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'
import { contacto } from './contacto.js'


export const infocontact = sequelize.define('infocontact', {

    id_info: {

        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nombre: {

        type: DataTypes.STRING

    },
    apellido: {

        type: DataTypes.STRING

    }

});

infocontact.hasMany(contacto, {

    foreignKey: 'idIndormacion',
    sourceKey: 'id_info'


})

contacto.belongsTo(infocontact, {

    foreignKey: 'idIndormacion',
    targetId: 'id_contacto'


})


