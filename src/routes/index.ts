/**
 * Module dependencies.
 */

import express from 'express';
const  router = express.Router();

router.get('/', function(req, res, next){
    res.render('home')
});

router.get('/contact', function(req, res, next){
    res.render('contact')
});

router.get('/clients', function(req, res, next){
    res.render('clients')
});

router.get('/aboutme', function(req, res, next){
    res.render('aboutme')
});

router.get('/signup', function(req, res, next){
    res.render('signup')
});


export default router;