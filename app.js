const express = require('express');
const PORT = '8888' 
const app = express();
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
});
app.use(express.static('./public'));

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

 app.use(router);
 app.set('view engine', 'ejs');
app.listen(`${PORT}`, ()=> {
    console.log('MY SERVER IS RUNNING. ')
})