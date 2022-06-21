import Sequelize from "sequelize";

export const sequelize =new Sequelize('contactos','root','',{

    host:'localhost',
    dialect:'mysql'

});