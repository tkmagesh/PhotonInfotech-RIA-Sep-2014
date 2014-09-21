taskApp.factory("categoryService", function(){
            var categories = ["Personal","Official"];
            return {
                add : function(categoryName){
                    categories.push(categoryName);
                },
                getAll : function(){
                    return categories;
                }
            }
        });