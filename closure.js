function global(){
    let a = 10

    function double(){
        a = a + a
        console.log(a)
    }
    function square(){
        a = a * a
        console.log(a)
    }

    return {double, square}
}

let {double, square} = global()

double()
square()
double()


