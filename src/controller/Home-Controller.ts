/**
 * Module dependencies.
 */

 import path from 'path';

import express from 'express';
const  router = express.Router();


router.get('/', function(req, res, next){

    res.render(path.resolve('./public/views/home/index.html'))
    
});


export default router;