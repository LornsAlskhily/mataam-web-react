const exe = require("express")

const App = exe()


App.get("/aa",function(req,res){
    res.send("weclome")
    console.log("hello")
})




App.listen(3000)