const express=require("express")
const app = express()

app.use("/",(req,res)=>{
    res.send("server is serving");
});

app.listen(5000,console.log("Server started on port 5000"))