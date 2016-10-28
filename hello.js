define(['word'],function (word){
    var sayHello = function(){
        return 'hello'+word.sayWord() ;
    };
    return{
        sayHello:sayHello
    } ;
});