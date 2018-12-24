(function() {

class Apple {
    get val() { return 1 }
    mycall() { return 'method' }
}

var instance = new Apple()
console.log(instance.val)
console.log(instance.mycall())

})()
