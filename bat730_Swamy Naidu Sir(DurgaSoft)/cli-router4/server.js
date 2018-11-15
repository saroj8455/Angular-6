exp=require("express")
app=exp()
app.listen(1000)
mongo=require("mongojs")
con=mongo("mongodb://localhost:27017/bat730pm")
bp=require("body-parser")
app.use(bp.json())

app.get("/getall",function(req,res){
con.tbl_products.find(function(err,result){
    res.send(result)
})
})

app.post("/getinfo",function(req,res){
rbody=req.body
proid=parseInt(req.body.pid)
con.tbl_products.find({pid:proid},function(err,result){
if(err)
res.send(err)
else
res.send(result)
})
})