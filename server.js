const express = require('express'); 
const app = express(); 
const PORT = 3000; 
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: true })); 
app.get('/', (req, res) => { 
res.render('index'); 
}); 
app.post('/submit', (req, res) => { 
const submittedName = req.body.studentName; 
const submittedEmail = req.body.studentEmail; 
res.render('success', {  
name: submittedName,  
email: submittedEmail  
}); 
}); 
app.listen(PORT, () => { 
console.log(`Server is successfully running on port ${PORT}`); 
}); 