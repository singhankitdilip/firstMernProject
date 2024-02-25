import express from "express"

const app = express();

const port = 3000 ;

app.get("/",(req,res)=>{
res.send("hello world!")
})

app.get("/api/store",(req,res)=>{
const store = [
    {
        id:1,
        bookname:"Do Epic Shit",
        Price:400
    },
    {
        id:2,
        bookname:"rich dad poor dad",
        Price:350
    },
    {
        id:3,
        bookname:"bodybuilding",
        Price:300
    }
]
res.send(store)
})

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})