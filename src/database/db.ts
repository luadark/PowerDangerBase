const Sequelize = require('sequelize');

const DB_NAME = 'Almacenamiento2023l';

/*
//POSTGRES
const DB_USER = 'postgres';
*/

//MY SQL
const DB_USER = 'root';


const DB_PASS = '12345678';



export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
 /*       
        //POSTGRES
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
     */  
 
        //MY SQL
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
        
    }

);


async function generateDb() {
    await database.sync({ force: true })
    console.log('Base de datos y tablas creada');
}

generateDb();
