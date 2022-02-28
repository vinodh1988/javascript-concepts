//javascript does not follow type checking

//a=90
b="King"
c=true
d=32.43

//console.log(a,b,c,d)

//console.log(typeof(a),typeof(b),typeof(c),typeof(d))
a=300
function fun(){
    console.log(a)
    var a=500
    console.log(a)
}

console.log(a)
fun()
console.log(a)