function greet(name) {
   console.log("Hello," + name + "!");
}
function
sayHelloWithDelay(callback){
    setTimeout(function() {
        callback("Keerthi");
    },2000);
}
sayHelloWithDelay(greet);