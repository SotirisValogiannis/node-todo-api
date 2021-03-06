var env = process.env.NODE_ENV || 'development';
console.log('env *****', env);

if( env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if( env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else if( env === 'production' ) {
  process.env.MONGODB_URI = 'mongodb://sotiris:35223522@ds137139.mlab.com:37139/node-js-lesson'
}
