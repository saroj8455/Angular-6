express=require("express")
ap=express()
ap.listen(1001)
ap.use(express.static(__dirname))
