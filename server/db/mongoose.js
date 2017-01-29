var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://sotiris:35223522@ds137139.mlab.com:37139/node-js-lesson'
};
mongoose.connect( process.env.PORT ? db.mlab : db.localhost);

module.exports = { mongoose };
