express=require("express")
ap=express()
ap.listen(1000)
ap.use(express.static(__dirname))
