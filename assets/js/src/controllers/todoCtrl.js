angular.module("Todo")
.controller('todoCtrl', function(){
  var todoCtrl = this;
  todoCtrl.todos = [];
  todoCtrl.createTodo = function(){
    var newTodo = {
      done:false,
      text:todoCtrl.todoText
    }
    todoCtrl.todos.push(newTodo);
    todoCtrl.todoText='';
  }

  todoCtrl.updateDone = function(index){
    console.log(index);
  }

  todoCtrl.deleteTodo = function(index){
    todoCtrl.todos.splice(index,1);
  }


});