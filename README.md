# Create React App에 Sass와 Less적용하기

[관련 블로그](http://wagunblog.com/wp/?p=2189&preview=true) 

```
npm install -g create-react-app
create-react-app ReactSassLessInit
cd ReactSassLessInit
npm run eject
npm install node-sass sass-loader less less-loader --save-dev
```

## webpack.config.dev.js

loaders 배열 안에 test: /\.css$/를 찾으면 쉽다. 그 다음에 추가

```
{
  test: /\.less$/,
  loader: 'style!css!less!postcss'
},
{
  test: /\.scss$/,
  loader: 'style!css!sass!postcss'
},
```

## webpack.config.prod.js

```
{
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!less!postcss')
},
{
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!sass!postcss')
},
```
