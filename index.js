import express from 'express'

//create express app
const app = express()
const port = +process.env.PORT || 4000

//router
app.get('/', (req, res)=>{
    res.status(200).json({
        status: res.statusCode, 
        msg: 'You\'re home'
    })
})
app.get('/About', (req, res)=>{
    res.status(200).json({
        status: res.statusCode, 
        msg: 'About Page'
    })
})
app.get('*', (req, res)=>{
    res.status(200).json({
        status: 404, 
        msg: '404 Page'
    })
})
app.listen(port)