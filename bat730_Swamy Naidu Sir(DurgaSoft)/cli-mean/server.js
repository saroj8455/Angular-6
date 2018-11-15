exp=require("express")
bp=require("body-parser")
app=exp()
app.use(bp.json())
app.listen(1000)
mj=require("mongojs")
con=mj("mongodb://localhost:27017/bat730pm")

app.get("/getdata",function(req,res){
    con.tbl_user.find(function(err,resu){
        res.send(resu)
    })
})

app.post("/insrec",function(re,rs){
rteqdata=re.body
con.tbl_user.save(rteqdata)
rs.send("Inserted")
})

app.post("/delrow",function(req,res){
    
    rdata=req.body
    console.log("rdata")
    con.tbl_user.remove(rdata)
    res.send("Deleted")
})

app.post("/update",function(req,res){
    rdata=req.body
    console.log(rdata)
    con.tbl_user.update(rdata[0],rdata[1])
    res.send("Updated...")
})