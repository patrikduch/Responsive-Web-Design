import  express  from 'express';
import homeController from "./controller/Home-Controller";
import path from 'path';

const app = express();




app.set('views', path.resolve('./public/views'));
// Mapping the EJS template engine to ".html" files
app.engine('html', require('ejs').renderFile);

/* Serve up static files from this directory */
app.use(express.static("static"));

app.use('/', homeController)

app.listen(8080, () =>  {
    console.log("Listening on port 8080")

});