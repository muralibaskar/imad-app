var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var pageContents = {
    'article-one' : {
      title:'Article One',
      heading:'Article One',
      content:`        
            <div> 
                Home Page for Article One. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. Home Page for Article One. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. Home Page for Article One. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. Home Page for Article One. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. 
            </div>`
    },
    'article-two' : {
      title:'Article Two',
      heading:'Article Two',
      content:`        
            <div> 
                Home Page for Article Two. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. Home Page for Article Two. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. Home Page for Article Two. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. Home Page for Article Two. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. 
            </div>`
    },
    'article-three' : {      
      title:'Article Three',
      heading:'Article Three',
      content:`        
            <div> 
                Home Page for Article Three. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. Home Page for Article Three. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. Home Page for Article Three. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. Home Page for Article Three. This is a web development learnin project from IIT Madras. This module is about client side scripting. Introduction to HTML, CSS and JS. 
            </div>`
    }
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlPage = `
    <html>
        <head>
            <title> ${title} </title>
            <meta name = 'viewport' content ="width=device-width, initial-scale = 1" />
            <link href="./ui/style.css" rel="stylesheet"/>
        </head>
        
        <body>
            <div class = "container">
                <div>
                    <a href = '/'>Home</a>
                </div>
                <hr/>
                <h3> ${heading} </h3>
                <p> Description </p>
                <div> ${content} </div>
            </div>
        </body>
    </html>`;
    return htmlPage;
}

app.get('/:articleName' , function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(pageContents[articleName]));
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
