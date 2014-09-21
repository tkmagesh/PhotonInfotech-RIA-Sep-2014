taskApp.controller("taskController", function taskController($scope, categoryService,$routeParams){
            $scope.categories = categoryService.getAll();
            $scope.tasks = {};
            
            $scope.getTasksToDisplay = function(){
                return $scope.tasks;
            }
            /*$scope.getTasksToDisplay = function(){
                console.log($routeParams.category);
                if ($routeParams.category){
                    return 
                } else {
                    return $scope.tasks;
                }
            }*/
            
            
            
           /* $scope.$on("newCategory",function(evt,data){
                $scope.categories.push(data);
            });*/
            
            $scope.addTask = function(taskName, category){
                $scope.tasks[category] = $scope.tasks[category] || [];
                var newTask = {
                    name : taskName,
                    isCompleted : false
                };
                $scope.tasks[category].push(newTask);
            };
            $scope.toggleCompletion = function(task){
                task.isCompleted = !task.isCompleted
            };
            $scope.getCompletedTaskCount = function(){
                var completedCount = 0;
                angular.forEach($scope.tasks, function(taskList, category){
                    completedCount += taskList.filter(function(t){
                        return t.isCompleted;
                    }).length;
                })
                return completedCount;
            };
            $scope.getTaskCount = function(){
                var taskCount = 0;
                angular.forEach($scope.tasks, function(taskList, category){
                    taskCount += taskList.length;
                })
                return taskCount;
            };
            $scope.removeCompleted = function(){
                angular.forEach($scope.tasks, function(taskList, category){
                    for(var i = taskList.length-1;i>=0;i--){
                        if (taskList[i].isCompleted)
                            taskList.slice(i,1);
                    }
                });
            };
            $scope.addCategory = function(categoryName){
                $scope.tasks[categoryName] = $scope.tasks[categoryName] || [];
            }
        });