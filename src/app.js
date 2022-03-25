const express = require("express");
require("./db/conn");
const path = require("path");
const hbs = require("hbs")
const User = require("./models/usermessage")

const app = express();
const port = process.env.PORT || 8000

//we do this static_path thing becaude we want to join css in public folder with our app
//setting path
const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//middleware
app.use("/css", express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use("/jq", express.static(path.join(__dirname,"../node_modules/jquery/dist")))

//to get in json
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)

app.get("/",(req,res)=>{
    res.render("index")
})

//saving in database
app.post("/contact", async(req,res)=>{
        try{
            const userData = new User(req.body);
            await userData.save();
            res.status(201).render("index")
        }catch(error){
            res.status(500).send(error)
        }
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})