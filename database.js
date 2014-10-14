var Sequelize = require('sequelize');

var sequelize = new Sequelize('tips', 'zx', 'admin', {
      dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
      host: "172.31.214.169",
      port:    5432, // or 5432 (for postgres)
    });
 
sequelize
.authenticate()
.complete(function(err) {
  if (!!err) {
    console.log('Unable to connect to the database:', err)
  } else {
    console.log('Connection has been established successfully.')
  }
});


var Tip = sequelize.define('Tip', {
  content: Sequelize.STRING,
  other: Sequelize.STRING
});

sequelize
  .sync({ force: true })
  .complete(function(err) {
     if (!!err) {
       console.log('An error occurred while creating the table:', err)
     } else {
       console.log('It worked!')
     }
  })