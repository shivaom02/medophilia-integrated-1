const mongoose = require('mongoose');

const validator = require('validator');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phoneNumber: {
      type: Number,
      required: true,
      trim: true,
      minlength: 10
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email invalid');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

hospitalSchema.virtual('classroom', {
  
    ref: 'Classroom',
  
    localField: '_id',
  
    foreignField: 'teacher'
});

// hospitalSchema.pre('remove', async function (next) {
  
//     const hospital = this;
  
//     const deleteClasses = await Classroom.findMany({ teacher: teacher._id });
  
//     deleteClasses.deleteMany();
  
//     next();
// });

// hospitalSchema.methods.getPublicProfile = function () {
  
//     const teacher = this;
  
//     teacherObject = {
//     _id: teacher._id,
  
//     name: teacher.name,
  
//     phoneNumber: teacher.phoneNumber,
  
//     email: teacher.email,
  
//     institution: teacher.institution
//   };
//   return teacherObject;
// };

// hospitalSchema.methods.generateAuthToken = async function () {
  
//     const teacher = this;
  
//     const token = await jwt.sign(
  
//         { _id: teacher._id.toString() },
  
//         process.env.TOKEN
  
//         );
  
//         teacher.tokens = [];
  
//         teacher.tokens = teacher.tokens.concat({ token });
  
//         await teacher.save();
//   return token;
// };

// hospitalSchema.statics.findByCredentials = async (email, password) => {

//     const teacher = await Teacher.findOne({ email });
   
//     if (!teacher) {
//        return null;
//     }
  
//     const isMatch = await bcrypt.compare(password, teacher.password);
  
//     if (!isMatch) {
  
//         return null;
//     }
//   return teacher;
// };

hospitalSchema.pre('save', async function (next) {

    const admin = this;

    if (admin.isModified('password')) {

        admin.password = await bcrypt.hash(admin.password, 10);
   }
 
   next();
});

const Admin = mongoose.model('Admin', hospitalSchema);

module.exports = Admin;
