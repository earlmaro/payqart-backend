const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    total_cost:{
        type:String,
        trim:true,
        requred:true
    },
    occupation:{
        type:String,
        trim:true,
        requred:true
    },
    salary:{
        type:String,
        trim:true,
        requred:true
    },
    salary_day:{
        type:Number,
        trim:true,
        requred:true
    },
    loan:{
        type:String,
        trim:true,
        required: true
    },
    shopping_credit:{
        type:String,
        trim:true,
        required: true
    },
    down_payment:{
        type:String,
        trim:true,
        required: true
    },
    monthly_instalment:{
        type:String,
        trim:true,
        required: true
    },
    tenure:{
        type:Number,
        trim:true,
        required: true
    }
},{
    timestamps:true
});

const User = mongoose.model('User', userSchema)

module.exports = User;