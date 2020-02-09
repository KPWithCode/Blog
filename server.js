const express = require('express');

const app = express();

const db = require('./config/database')

// Test DB 
db.authenticate()
.then(() => console.log('Blog Database connected'))
.catch(err => console.log('Error: ' + err))





app.get('/', (req, res) => {
    res.send('SERVER')
})



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT} `))