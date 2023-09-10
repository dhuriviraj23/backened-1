const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.json({
      mesg:'hello backend and bye bye'
   })
})
  
app.listen(3000)
