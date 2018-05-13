const express = require('express');
const handlebars  = require('express-handlebars');

const env = process.env.NODE_ENV || 'development';
const port = 3010;
const app = express();

app.engine('html', handlebars({
  layoutsDir: '/src/browser/html',
  extname: '.html',
  defaultLayout: false
}));
app.set('view engine', 'html');
app.set('views', './src/browser/html');
app.use(express.static('src/browser'));

app.get('/', (req, res) => 
  res.render('index.html', {
    isProduction: env === 'production'
  })
);

app.listen(port, () => 
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}!`)
);

