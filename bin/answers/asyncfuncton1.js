async function doAsync() {
  return "値"
}

doAsync().then(value => {
  console.log(value)
})