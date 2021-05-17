const mongoose=require('mongoose');

const Schema=mongoose.Schema

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model('user',userSchema)