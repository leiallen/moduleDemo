require.config({
    path:{
        'hello':'hello.js'
    }
});
require(['hello'],function(hello){
    alert(hello.sayHello());
});