exp=require("express")
bp=require("body-parser")

ap=exp()
ap.use(bp.json())
ap.listen(1234)

ap.get("/met1",function(req,res){
res.send("Met1 exe...")
})

ap.post("/met2",function(req,res){
    var reqdata=req.body
console.log(reqdata.uname)
res.send("Data rec...")
})