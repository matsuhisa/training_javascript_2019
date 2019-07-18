function asyncTask() {
  const random = Math.random()
  console.log(random)

  if(random > 0.5){
    return Promise.resolve("成功")
  }else{
    return Promise.reject(new Error("失敗"))
  }
}

asyncTask()
  .then(function onFulfilled(value) {　
      console.log(value)
  })
  .catch(function onRejected(error) {
      console.log(error.message)
  });