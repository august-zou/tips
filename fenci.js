var mmseg = require("mmseg");
var Sequelize = require('sequelize');

var sequelize = new Sequelize('tips_test', 'zx', 'admin', {
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

var Word = sequelize.define('Word', {
  content: Sequelize.STRING,
  other: Sequelize.STRING
});

var TipWord = sequelize.define('TipWord', {
  tip_id: Sequelize.INTEGER,
  word_id: Sequelize.INTEGER,
  other: Sequelize.STRING
});


// var q = mmseg.open('/usr/local/etc/');
// console.log(q.segmentSync("我是中文分词"));
// var exclude_words = ["我","的"];


function fenci () {
  Tip.findAll().success(function (tips) {
    console.log(tips);
    tips.forEach(function(tip) {
      words = q.segmentSync(tip.content);
      console.log(words);
    });
  })
}

fenci();