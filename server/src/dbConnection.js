
const Sequelize = require('sequelize');

        let sequelize = new Sequelize('denis', 'denisniwemugisha', '', {
            host: 'localhost',
            dialect: 'postgres',
            operatorsAliases: false,
        
            pool: {
            max: 5,
            min: 0, 
            acquire: 30000,
            idle: 10000
            },
        });
        

        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        exports.getConnection = function(){
            return sequelize;
        }
