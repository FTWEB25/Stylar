const mongoose=require("mongoose")
const serviceSchema=mongoose.Schema({
    serviceName:{
        type:String,
        required:true
    },
    time:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        enum:["Braids","Haircut","Eyelashes","Weaves","Nails","Kids"]
    }
})

const ServiceModel=mongoose.model('service',serviceSchema)

module.exports=ServiceModel