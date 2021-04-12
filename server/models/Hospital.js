const mongoose = require('mongoose')
const crypto=require("crypto");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const hospitalSchema = new mongoose.Schema(
    {
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        phone:{
            type:Number
        }
        ,email:{
            type:String
        },
        registrationId:{
            type:String
        },
        doctor:[{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        }],
        pharma:[{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Pharma"
        }],
    },
    {
        timestamps: true,
        toObject: {
            virtuals: true,
        },
    }
)

// generate passwordResetToken
hospitalSchema.methods.createPasswordResetToken = function () {

    const resetToken = crypto.randomBytes(32).toString('hex')
    
    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex')

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000

    return resetToken
}


// generateAuthToken
hospitalSchema.methods.generateAuthToken = async function () {
    
    const hospital = this;
    
    const token = jwt.sign(
        {
            _id: hospital._id.toString(),
        },
        // process.env.JWT_SECRET,
        "secrect",
        {
            // expiresIn: process.env.JWT_EXPIRE,
            expiresIn:"1d",
        }
    )
    return token
}

hospitalSchema.methods.toJSON = function () {

    const hospital = this

    const userObj = hospital.toObject()

    delete userObj.password

    return userObj
}

hospitalSchema.methods.checkAndUpdate=async function(currentPassword,newPassword){

    const hospital=this;
    
    const isMatch = await bcrypt.compare(currentPassword, hospital.password);
    // console.log(isMatch);
   if(!isMatch){
        return isMatch
   }
   else{
    hospital.password=newPassword;
   await hospital.save();
    return isMatch;
   }
}
hospitalSchema.statics.findByCredentials = async function (email, passowrd) {
    
    const hospital = await Hospital.findOne({email:email})
    
    
    if (!hospital) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(passowrd, hospital.password)
    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return hospital
}

hospitalSchema.pre('save', async function (next) {
    const hospital = this
 
    if (hospital.isModified('password')) {
        hospital.password = await bcrypt.hash(hospital.password, 8)
    }

    next()
})

module.exports = Hospital = mongoose.model('Hospital', hospitalSchema)