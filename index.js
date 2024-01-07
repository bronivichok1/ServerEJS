/*import {UserData} from './checkpassword'*/

const express= require('express')
const app=express()

class UserData {
    constructor(name, passw) {
        this.name = name;
        this.passw = passw
        ;
    }
}

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

/*app.get('/user/:username',(req,res)=>{
    res.render(`user`,{
        username:req.params.username,
        hobbies:[]
    })
})*/
app.post('/check-userdata',(req,res)=>
{
    let username=req.body.username
    let password=req.body.password
    let Test = new UserData("0","11")

    if((Test.name==this.username)&&(Test.passw==this.password)) {
            return res.redirect('/index')
    }
    else
    {
            return res.redirect('/')
    }
})
const PORT=3001
app.listen(PORT,()=>{
    console.log(`server started: http://localhost:${PORT}`)
})