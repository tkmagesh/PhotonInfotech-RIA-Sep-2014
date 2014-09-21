taskApp.config(function($routeProvider){
            $routeProvider
            .when('/tasks',{
                templateUrl : 'templates/tasks.tmpl.html',
                controller : 'taskController'
            })
            .when('/categories',{
                templateUrl : 'templates/categories.tmpl.html',
                controller : 'categoryController'
            }).otherwise({
                redirectTo : '/tasks'
            });;
        });
        