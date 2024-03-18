const mongoose = require("mongoose")
const{schema}=mongoose

const productschema=new({
    name:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    desc:{
        type:String,
        require:true,
        min:0
    }

})

const Product = mongoose.model("Product",productSchema)
mongoose.model.export