const express= require('express')

const app=express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/index2',(req,res)=>{
    res.render('index2')
})
app.get('/user/:username',(req,res)=>{
    res.render(`user`,{
        username:req.params.username,
        hobbies:[]
    })
})
const PORT=3001
app.listen(PORT,()=>{
    console.log(`server started: http://localhost:${PORT}`)
})