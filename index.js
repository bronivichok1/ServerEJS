const express= require('express')

const app=express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render('Login')
})
app.get('/Reg',(req,res)=>{
    res.render('Reg')
})
app.get('/index',(req,res)=>{
    res.render('index')
})
app.get('/index2',(req,res)=>{
    res.render('index2')
})
app.get('/Reg',(req,res)=>{
    res.render('Reg')
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