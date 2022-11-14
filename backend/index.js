const connectToMongo=require('./db');

const express = require('express');
connectToMongo();
const app = express()
const port = 3000

app.use(express.json()) // Tit is a middleware and it is neccesary to use . to know about it search on google with middleware node js
app.post('/', (req, res) => {
  res.send('Hello Jayesh!')
  
})
app.use('/api/auth',require('./routers/auth'));
// app.use('/api/notes',require('./routers/notes'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})