const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Dynamic_Website",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("mongo connection succesfull");
}).catch((e)=>{
    console.log("mongo connection error : " ,e);
})