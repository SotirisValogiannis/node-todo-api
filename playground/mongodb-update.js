const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID("5889faeb5f6944cfc0fabdd8")},
  //   {$set: {
  //     completed: true
  //   }},
  //   {
  //     returnOriginal: false
  //   }
  // ).then((result)=> {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5889f9b86174c9cf739fddce")
  },
  {
    $set: {
      name: 'Andreas'
    },
    $inc: {
      age: 1
    }
  },
  {
    returnOriginal: false
  }).then((result)=> {
    console.log(result);
  })

  //db.close();
})
