import  express  from 'express';

const app = express();

import homeController from "./controller/Home-Controller";

// Mapping the EJS template engine to ".html" files
app.engine('html', require('ejs').renderFile);

app.use('/', homeController)

app.listen(8080, () =>  {
    console.log("Listening on port 8080")

});