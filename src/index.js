import app from './app.js'
import { sequelize } from './database/db.js'
// import './models/contacto.js'
// import './models/info.js'



const main = async function main() {

    try {

        await sequelize.sync({ force: false })
        await sequelize.authenticate();
        app.listen(4000);
        console.log('srive esta vuelta', 4000);
    } catch (error) {

        console.error('Algo anda mal :v :', error);


    }


}



main();

