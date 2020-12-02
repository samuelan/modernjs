function printAfterDelay(what, when) {
    return new Promise((resolve, reject) => {    
      const callback = () => {
        console.log(what); resolve(what);
      }
      setTimeout(callback, when)
    })                     
  }
//a.
  console.log(printAfterDelay('Hello', 1000))
 //b. 
  printAfterDelay('Hello', 1000).then(console.log)
 //c.
  printAfterDelay('Hello', 1000).then(printAfterDelay('Goodbye', 2000))
//d. 
  printAfterDelay('Hello', 1000).then(() => printAfterDelay('Goodbye', 2000))

//e.
  const p1 = printAfterDelay('Hello', 1000)
  p1.then(() => printAfterDelay('Good', 1000))
  p1.then(() => printAfterDelay('bye', 1000))

