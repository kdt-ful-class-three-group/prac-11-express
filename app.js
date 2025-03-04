const express = require('express');
const { engine } = require('express-handlebars');
// ? engine은 왜 {}로 감싸야 기능을 하는 것이지?

const app = express();

app.engine('handlebars', engine());
// ? handlebars를 함수로 쓰고 있는건가?
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {title: 'home'});
});

app.get('/*', (req, res) => {
  res.render(req.url.split('/')[1], {title: req.url.split('/')[1]});
});

app.listen(3000, () => {
  console.log('http://localhost:3000/')
});