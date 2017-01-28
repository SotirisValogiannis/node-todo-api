const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDb server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result)=> {
  //   console.log(result)
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result)=> {
  //   console.log(result);
  // })

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({_id: new ObjectID("5889fac281a8dacfad94eee9")}).then((result)=> {
    console.log(result);
  });

  //db.close();
})
