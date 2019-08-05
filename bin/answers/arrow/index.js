// 基本形
let pyopyo = ( a ) => {
  return a * 3
}
console.log(pyopyo(1))

// 1行で書けるとき
// { } が省略できます
let foo = ( a, b ) => a * b
console.log(foo(2, 3))

// 引数が1つのとき
// () が省略できます
let bar = a => a * 2
console.log(bar(2))

// 引数がないとき
// () は省略できませんが、 { } は省略できます
let pyo = () => bar(100)
console.log(pyo())