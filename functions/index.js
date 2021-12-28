const functions  = require('firebase-functions');
const admin      = require('firebase-admin');
const fs         = require('fs');

var app = admin.initializeApp();

// Getting and replacing meta tags
exports.preRender = functions.https.onRequest((request, response) => {
    
    // Error 404 is false by default
    let error404 = false;
        
    // Getting the path
    const path = request.path ? request.path.split('/') : request.path;

    // Getting index.html text
    let index = fs.readFileSync('./web/index.html').toString();
    
    // Changing metas function
    const setMetas = (title, description, url) => {
        
        index = index.replace('__TITLE__', title);
        index = index.replace('__DESCRIPTION__', description);
        index = index.replace('__URL__', url);
        
    }
    
    // Navigation menu
    if     (path[1] === '')    setMetas('Portfolio - Seyon Rajagopal', 'Hello! My name is Seyon Rajagopal, and I am a Computer Science Co-op student at Ryerson University. I build, design and develop websites and applications.', 'https://seyon.dev/');
    else if(path[1] === 'resume')    setMetas('Resume - Seyon Rajagopal', 'Hello! My name is Seyon Rajagopal. View My Resume!', 'https://seyon.dev/resume');

    
    // Sending index.html    
    error404
    ? response.status(400).send(index)
    : response.status(200).send(index);
    
});