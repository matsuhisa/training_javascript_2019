function blockTime(timeout) {
  const startTime = Date.now()
  console.log(`${startTime} から blockTime スタートです`)

  while (true) {
    const diffTime = Date.now() - startTime
    if (diffTime >= timeout) {
      console.log(`${Date.now()} で blockTime 完了です`)
      return
    }
  }
}

console.log("処理を開始")
blockTime(1000)
console.log("この行が呼ばれるまで処理が1秒間ブロックされる")