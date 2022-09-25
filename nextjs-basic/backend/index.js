const express = require("express")
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.get("/",(request,response)=>{
    response.send("ok")
})

app.get("/test",(request,response) =>{
    console.log("yes")
    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    response.send(arr[Math.floor(Math.random()*26)])
})

app.all("/login",(req,res)=>{
    //console.log(req.body.username)
    //console.log(req.body.school)
    if (req.body.username === "kana" && req.body.school === "horwang"){
        res.json({
            "message":"success",
            "token":"hw"
        })
    }else if (req.body.username === "jack" && req.body.school === "suankulab"){
        res.json({
            "message":"success",
            "token":"sk"
        })
    }else{
        res.json({
            "message":"fail",
            "token":"no token"
        })
    }
})


app.listen(8000,()=>{
    console.log('connect to port 8000')
})