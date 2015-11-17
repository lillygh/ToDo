var Todo = require('../models/todos.js');

// index action
function index(req,res){
  Todo.find({}, function(err,todos){
    if(err) throw err;
    res.json(todos);
  });
};


// create action
function create(req,res){
  var todo = new Todo;
  todo.entry = req.body.entry;
  todo.done  = req.body.done;

  todo.save(function(err){
    if(err) throw err;
    res.json({success: true, message: "Item saved!"})
  });
};

// destroy action
function destroy(req,res){
  Todo.remove( {entry: req.params.entry} ,function(err){
    if(err) throw err;
    res.json({success: true, message: "Item deleted!"})
  });
};


module.exports = {
                    allTodos: index,
                    create: create,
                    destroy: destroy

                  }
