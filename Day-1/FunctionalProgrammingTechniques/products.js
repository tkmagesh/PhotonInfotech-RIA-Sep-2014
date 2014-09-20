var products = [
    {id : 7, name : "Pen", cost : 60, units : 70, category : 2},
    {id : 3, name : "Hen", cost : 50, units : 40, category : 1},
    {id : 5, name : "Ten", cost : 80, units : 30, category : 2},
    {id : 9, name : "Len", cost : 20, units : 50, category : 1},
    {id : 2, name : "Den", cost : 40, units : 20, category : 2},
    {id : 4, name : "Zen", cost : 50, units : 90, category : 1}
]

var categories = [
    {id : 1, name : "stationary"},
    {id : 2, name : "grocery"}
]

/*
min
max
sum
avg
filter
groupBy

join
*/

function min(list, attrName){
   var result = list[0][attrName];
   for(var i=1;i<list.length;i++)
        if (result > list[i][attrName])
           result = list[i][attrName];
   return result;
}

function transform(list, transformerFn){
   var result = [];
   for(var i = 0; i<list.length;i++)
      result.push(transformerFn(list[i]));
   return result;
}

var productTransformerFn = function (p){
   return {
      id : p.id,
      name : p.name,
      value : p.units * p.cost
   
   }
};

min(transform(products,productTransformerFn),"value")

function filter(list,criteriaFn){
    var result = [];
    for(var i=0;i<list.length;i++)
        if (criteriaFn(list[i]) === true)
            result.push(list[i]);
    return result;
}

var costlyProductCriteria = function(p){
    return p.cost > 50;
}

 var costlyProducts = filter(products,costlyProductCriteria);
console.log("Costly Products [price > 50]")
console.table(costlyProducts);

function inverseCritera(criteriaFn){
    return function(item){
        return !criteriaFn(item);
    }
}

var cheapProductCriteria = inverseCritera(costlyProductCriteria);
var cheapProducts = filter(products,cheapProductCriteria);
console.log("Affordable products [ !costlyProducts ]");
console.table(cheapProducts);


function andCriteria(criteriaFn1, criteriaFn2){
    return function(item){
        return criteriaFn1(item) && criteriaFn2(item);
    }
}

var category1ProductsCriteria = function(p){
 return p.category === 1;
}
var affordableCategory1Products = filter(products,andCriteria(category1ProductsCriteria, inverseCritera(costlyProductCriteria)));
console.log("Affordable Category - 1 products");
console.table(affordableCategory1Products);

function orCriteria(criteriaFn1, criteriaFn2){
    return function(item){
        return criteriaFn1(item) || criteriaFn2(item);
    }
}

var affordableOrCategory1Products = filter(products,orCriteria(category1ProductsCriteria, inverseCritera(costlyProductCriteria)));
console.log("Affordable OR Category - 1 products");
console.table(affordableOrCategory1Products);


function groupBy(list, selectorFn){
    var result = {};
    for(var i=0;i<list.length;i++){
        var key = selectorFn(list[i]);
        result[key] = result[key] || [];
        result[key].push(list[i]);
    }
    return result;
}
var categoryKeySelector=function(p){ return p.category; }
var productsByCategory = groupBy(products,categoryKeySelector)

console.table(productsByCategory[1])
console.table(productsByCategory[2])

var costBasedSelector = function(p){ 
    return p.cost > 50 ? "costly" : "affordable"
};

var productsGroupedByCost = groupBy(products,costBasedSelector);

console.log("Costly products");
console.table(productsGroupedByCost["costly"]);

console.log("Affordable products");
console.table(productsGroupedByCost["affordable"]);

function memorize(fn){
    var cache = {};
    return function(){
      var key = window.JSON.stringify(arguments);
      if (typeof cache[key] === "undefined"){
         console.log("processing");
         cache[key] = fn.apply(this,[].slice.call(arguments));
      } else {
         console.log("from cache");
      }
      return cache[key];
    }
}

function add(x,y){
   return x + y;
}

var memorizedAdd = memorize(add);


                    

