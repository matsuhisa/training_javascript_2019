function coin(number) {
  if( 10 > number ) {
    return Promise.resolve("成功")
  }else{
    return Promise.reject(new Error("失敗"))
  }
}

// coin(3)
//   .then(value => { console.log(value) })
//   .catch(error => { console.log(error) })
// coin(11)
//   .then(value => { console.log(value) })
//   .catch(error => { console.log(error) })

module.exports = coin