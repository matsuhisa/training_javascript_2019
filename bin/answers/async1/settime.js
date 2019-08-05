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

console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行します")
setTimeout(() => {
  console.log("3. ブロックする処理を開始します")
  blockTime(1000)
  console.log("4. ブロックする処理が完了しました")
}, 10)
console.log("2. 同期的な処理を実行します")