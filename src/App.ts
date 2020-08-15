import  express  from 'express';
import path from 'path';

import expressLayouts from 'express-ejs-layouts';
import routes from './routes';

const app = express();


app.use(expressLayouts);

app.set('views', path.resolve('./public/views'));
// Mapping the EJS template engine to ".html" files
//app.engine('html', require('ejs').renderFile);

app.set('view engine','ejs'); 
app.engine('ejs', require('ejs').__express);

/* Serve up static files from this directory */
app.use(express.static("static"));


app.use('/', routes)

app.listen(8080, () =>  {
    console.log("Listening on port 8080")

});