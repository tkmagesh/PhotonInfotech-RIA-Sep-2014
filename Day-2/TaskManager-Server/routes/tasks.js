var express = require('express');
var router = express.Router();

var tasks = [
    {id : 1, name : "Learn jQuery", isCompleted : false},
    {id : 2, name : "explore javaScript", isCompleted : false},
    {id : 3, name : "master Angular.js", isCompleted : false}
];

/* GET tasks listing. */
router.get('/', function(req, res) {
    res.write(JSON.stringify(tasks));
    res.end();
});

router.post('/', function(req,res){
    var newTask = req.body;
    newTask.id = tasks.reduce(function(t1,t2){
       return t1.id > t2.id ? t1.id : t2.id
    },0) + 1;
    tasks.push(newTask);
    res.end();
});
router.put('/:id', function(req,res){
    var taskId = parseInt(req.params.id);
    var updatedTask = req.body;
    var task = tasks.filter(function(t){
        return t.id === taskId;
    })[0] || {};
    task.name = updatedTask.name;
    task.isCompleted = updatedTask.isCompleted;
    res.end();
});
module.exports = router;
