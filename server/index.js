const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (request, response)=>{
    response.status(200).send('Welcome to ther server of HorrorScope')
})

const PORT = 6969

app.listen(PORT, console.log(`App is running on htte:localhost:${PORT}`))