const express = require('express')
const app = express()
const port = 3002

// require express-handlebars here
const exphbs = require('express-handlebars')

//express template engine載入之後，要告訴 Express：麻煩幫我把樣板引擎交給 express-handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// static file setting
app.use(express.static('public'))

//routes setting
app.get('/', (req, res) => {
    // res.send('this is owen speaker')
    // 原本的send是回應寫死的HTML，下面的render是去找模板引擎 用index 表示 index.handlebars
    res.render('index')
})

app.get('/about', (req, res) =>{
    res.render('about')
})
app.get('/contact', (req, res) =>{
    res.render('contact')
})
app.get('/portfolio', (req, res) =>{
    res.render('portfolio')
})


//start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on localhost: ${port}`)
})