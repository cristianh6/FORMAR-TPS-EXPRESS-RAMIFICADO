const express = require('express');
var path = require('path');
const app = express();
var port = 3031;

app.set('views', path.join(__dirname, 'views'));

/* app.set('view engine', 'ejs'); */

app.use(express.static('public'));

/* const indexRouter = require('./routers/indexRouter'); */


app.get('/', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','home.html'))
});

app.get('/about', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','about.html'))
}); 



/* app.use('/', indexRouter); */


app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`);
    });