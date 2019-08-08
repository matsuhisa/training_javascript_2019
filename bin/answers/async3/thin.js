function dummyFetch(path) {
  random = Math.random()
  console.log(random)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(path.startsWith("/success")) {
        resolve({ body: `Response body of ${path}` })
      }else{
        reject(new Error("NOT FOUND"))
      }
    }, 1000 * random)
  })
}

dummyFetch("/success/data").then
  (
    function onFulfilled(response) {
      console.log(response)
    }, 
    function onRejected(error) {
      console.log(error)
    }
  );