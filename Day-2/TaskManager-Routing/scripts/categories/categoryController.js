taskApp.controller("categoryController", function ($scope,$rootScope, categoryService){
            $scope.getCount = function(){
                return categoryService.getAll().length;
            };
            $scope.getAll = function(){
                return categoryService.getAll();
            };
            $scope.addCategory = function(categoryName){
                categoryService.add(categoryName);
                $rootScope.$broadcast("newCategory",categoryName);
            };
        });