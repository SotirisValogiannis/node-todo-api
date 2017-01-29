const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove
// Todo.remove({}).then((result)=> {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '588e3cc872bd20590131dc93' }).then((todo)=>{
  console.log(todo)
})

// Todo.findByIdAndRemove('588e3cc872bd20590131dc93').then((todo)=> {
//   console.log(todo);
// });
