const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema(
    {
        password: {
            type: String,
            // required: true,
        },
        
        name: {
            type: String,
            // required: [true, 'is required'],
        },
        phone:{
            type:Number
        }
        ,email:{
            type:String
        },
        registrationId:{
            type:String
        }
    },
    {
        timestamps: true,
        toObject: {
            virtuals: true,
        },
    }
)

module.exports = Hospital = mongoose.model('Hospital', hospitalSchema)