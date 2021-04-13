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
                    token = req.headers('AuthorizationUser')
                    break;
                case "Doctor":
                    Role=Doctor;
                    token = req.headers('AuthorizationDoctor')
                    break;
                case "Pharma":  
                    Role=Pharma;
                    token = req.headers('AuthorizationPharma')
                    break;
                case "Hospital":
                    Role=Hospital 
                    token = req.headers('AuthorizationAdmin')   
                    break;
                case "SuperAdmin":
                    Role=SuperAdmin 
                    token = req.headers('AuthorizationSuperAdmin')   
                    break;
                default:
                    return;    
                        
            }
            
            if(!token){
                res.status(401).json({msg:'No token, access Denied'})
            }

            // const token = req.cookies.resultAuth
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
