let a = 1

function A(){
    //console.log(a)
    let a = 2
    B()
}

function B(){
    console.log(a)
}

A()
//B()