var lineReader = require('line-reader');
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



function read_from_file(){
  var i=0;
  lineReader.eachLine('content.csv', function(line, last) {
    console.log(++i);
    var tip = Tip.build({
      content: line
    });

    tip
      .save()
      .complete(function(err) {
        if (!!err) {
          console.log('The instance has not been saved:', err)
        } else {
          console.log('We have a persisted instance now')
        }
      })
  });
}
read_from_file();

