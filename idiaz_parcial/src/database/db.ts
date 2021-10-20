const Sequelize = require('sequelize');

const BD_NAME = 'db_parcial';
const BD_USER = 'idiaz_parcial';
const BD_PASS = 'idiaz_parcial20';

export const database = new Sequelize(
    BD_NAME,
    BD_USER,
    BD_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);
database.sync({forse: true})
    .then(function(){
        console.log('HA FUNCIONADO CORRECTAMENTE')
    }

    )