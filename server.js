import { json } from 'express'
import express from 'express'
import studentRouter from './Routes/router.js'
const app = express()

app.use(json())

app.use('/', studentRouter)

const port = 4000

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

export default app