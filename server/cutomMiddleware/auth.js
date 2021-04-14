const User = require('../models/User');
const Doctor=require("../models/Doctor");
const Pharma=require("../models/Pharma");
const Hospital =require("../models/Hospital");
const jwt = require("jsonwebtoken");

const auth = (role)=>{
    return async (req, res, next) => {
        
        let Role,token;
        try {
            //AuthorizationDoctor AuthorizationPharma  AuthorizationSuperAdmin AuthorizationAdmin
            switch(role){
                case "User":
                    Role=User;
                    token = req.header('AuthorizationUser')
                    break;
                case "Doctor":
                    Role=Doctor;
                    token = req.header('AuthorizationDoctor')
                    break;
                case "Pharma":  
                    Role=Pharma;
                    token = req.header('AuthorizationPharma')
                    break;
                case "Hospital":
                    Role=Hospital 
                    token = req.header('AuthorizationAdmin')   
                    break;
                case "SuperAdmin":
                    Role=SuperAdmin 
                    token = req.header('AuthorizationSuperAdmin')   
                    break;
                default:
                    return;    
                        
            }
            
            console.log(token);
            if(!token){
                res.status(200).json({msg:'No token, access Denied'})
            }

            console.log(token);
            const roleInfo = jwt.verify(token, "secrect")
            
            // console.log(Role,"role model");
            // console.log(roleInfo._id,"role id");
            // console.log("resuts are ",await Role.findById(roleInfo._id));
            const user = await Role.findById({_id:roleInfo._id});
            
            user.password=""
            if (!user) {
                res.json({
                    message:"user not found",
                    success: 0
                })
            }
            //Remove token
            req.userInfo = {
                role:user,
                token:token
            }
            next()
        } catch (e) {
            console.log(e,"error");
            res.json({
                
                success: 0,
                message:"authentication failed"
            })
        }
    }
    
}
// const isLoggedIn = async (req, res, next) => {
//     const token = req.cookies.resultAuth

//     if (token) {
//         let userInfo = jwt.verify(token, process.env.JWT_SECRET)
//         if (userInfo) {
//             let user = await User.findById(userInfo._id)
//             res.render('profile', { user })
//             return
//         }
//     }
//     next()
// }

module.exports = { auth }
