const express = require('express')
const handlebars = require('express-handlebars') // return obj 
const connectDB = require('./config/db')
const path = require('path')


// Routes 
const post = require('./routes/posts')
// Khoi dong app
const app = express()



// Khoi dong express middleware 
app.use(express.json())
app.engine(
    'handlebars', 
    handlebars.engine(
        {
            extname: '.handlebars',
        }
    )
)
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'view'));


// ket noi co so du lieu
connectDB()

// Mot so routes co ban, co the dua vao file rieng trong folder routes
app.get('/', (req, res)=> res.render('index'))
app.get('/about', (req, res)=> res.render('about'))

// sử dụng route 
app.use('/posts', post)
const PORT = 5000
app.listen(PORT, () => console.log(`Server  da khoi dong tai ${PORT}`))