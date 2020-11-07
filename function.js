[10, 20, 30, 40].forEach(function(e){
    console.log(e*e)
  })
  
  // function call
  function display(a, b){
     [].forEach.call(arguments, function(e) {
       console.log(e*e)
     })
  }
  display(10, 20)

  //rest parameters
  function restFunc(...args){
      args.forEach(function(e){
          console.log(e*2)
      })
  }

  restFunc(1, 2, 3)

  //this keyword - meaning of this depends on the calling env
  function aFunc(){
      console.log('in aFunc: ', this)
  }
  
  aFunc()
