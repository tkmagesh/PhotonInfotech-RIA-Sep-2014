describe("A calculator add operation", function(){
    it("should be able to add two numbers", function(){
        //arrange
        var number1 = 10,
            number2 = 20,
            expectedResult = 30;
        
        //act
        var result = add(number1,number2);
        
        //assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add two numbers in string format", function(){
        //arrange
        var number1 = "10",
            number2 = "20",
            expectedResult = 30;
        
        //act
        var result = add(number1,number2);
        
        //assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add treat non numeric strings as zero", function(){
        //arrange
        var number1 = "10",
            number2 = "abc",
            expectedResult = 10;
        
        //act
        var result = add(number1,number2);
        
        //assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add only one number", function(){
        //arrange
        var number1 = 10,
            expectedResult = 10;
        
        //act
        var result = add(number1);
        
        //assert
        expect(result).toBe(expectedResult);
    });
    it("should be return zero when no arguments are passed", function(){
        //arrange
        var expectedResult = 0;
        
        //act
        var result = add();
        
        //assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add functions returning numbers", function(){
        //arrange
        var f1 = function(){ return 10;},
            f2 = function(){ return 20;},
            expectedResult = 30;
        
        //act
        var result = add(f1,f2);
        
        //assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add functions returning numbers in string format", function(){
        //arrange
        var f1 = function(){ return "10";},
            f2 = function(){ return 20;},
            expectedResult = 30;
        
        //act
        var result = add(f1,f2);
        
        //assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add array of numbers", function(){
        //arrange
        var numbers1 = [10,20],
            numbers2 = [30,40]
            expectedResult = 100;
        
        //act
        var result = add(numbers1, numbers2);
        
        //assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add a nested array of numbers", function(){
        //arrange
        var    numbers = [10,[20,[30,[40]]]];
            expectedResult = 100;
        
        //act
        var result = add(numbers);
        
        //assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add functions returning array of numbers in string format", function(){
        //arrange
        var f1 = function(){ return ["10",30];},
            f2 = function(){ return [20,40];},
            expectedResult = 100;
        
        //act
        var result = add(f1,f2);
        
        //assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add array of functions returning array of numbers in string format", function(){
        //arrange
        var f1 = function(){ return ["10",30];},
            f2 = function(){ return [20,40];},
            expectedResult = 100;
        
        //act
        var result = add([f1,f2]);
        
        //assert
        expect(result).toBe(expectedResult);
    });
});