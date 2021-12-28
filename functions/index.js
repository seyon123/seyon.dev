const functions  = require('firebase-functions');
const admin      = require('firebase-admin');
const fs         = require('fs');

var app = admin.initializeApp();

// Getting and replacing meta tags
exports.preRender = functions.https.onRequest((request, response) => {
        
    // Getting the path
    const path = request.path ? request.path.split('/') : request.path;
    console.log(path);

    // Getting index.html text
    let index = fs.readFileSync('./web/index.html').toString();
    
    // Changing metas function
    const setMetas = (title, description, url) => {
        
        index = index.replace(/__TITLE__/g, title);
        index = index.replace(/__DESCRIPTION__/g, description);
        index = index.replace(/__URL__/g, url);
        
    }
    
    // Navigation menu
    if(path[1] === 'resume')    setMetas('Resume - Seyon Rajagopal', 'Hello! My name is Seyon Rajagopal. View My Resume!', 'https://seyon.dev/resume');
    else if(path[1] === '404')    setMetas('404 - Seyon Rajagopal', 'This page does not exist!', 'https://seyon.dev/404');
    else setMetas('Portfolio - Seyon Rajagopal', 'Hello! My name is Seyon Rajagopal, and I am a Computer Science Co-op student at Ryerson University. I build, design and develop websites and applications.', 'https://seyon.dev/');

    
    // Sending index.html    
    response.status(200).send(index);
    
});