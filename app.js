const express = require('express');
  
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs')
  
app.get('/', (req, res) => {
    res.render('input', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});
  
app.get('/#contact', (req, res) => {
    res.render('input#contact', { title: 'Contact' });
});

// Express middleware
app.use(express.static('public'));
app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running,
                    and App is listening on port ${PORT}`)
    else 
        console.log("Error occurred, server can't start", error);
    }
);