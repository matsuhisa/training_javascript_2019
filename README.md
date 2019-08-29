# Training JavaScript 2019

## 環境の起動

```
bundle install
```

```
yarn install
```

```
bundle exec middleman server --bind-address 0.0.0.0
```

```
open http://localhost:4567/
```

# 環境の作成

```
yarn add webpack --dev
```

## エラーの対応

ローカル環境の node に関する path を通す


```
export PATH=$PATH:./node_modules/.bin
```

```
Uncaught Error: Module parse failed: Unexpected token
```
