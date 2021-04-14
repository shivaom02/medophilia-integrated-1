const route=require("express").Router();

//pharma

const pharmaController = require("../../controllers/Pharma/pharma");

const docController = require("../../controllers/Doc/doctor");

const hospitalController = require("../../controllers/Hospital/hospital");

const {auth}=require("../../cutomMiddleware/auth");

const Pharma =require("../../models/Pharma");

route.post('/register',auth("Hospital"),hospitalController.register);

route.post('/log_in', hospitalController.login);

route.get('/log_out',auth('Hospital'), hospitalController.logout);

//pharma

route.post('/hospital/register',auth('Hospital'), pharmaController.register);

//doctor

route.post('/doctor/register', auth('Hospital') , docController.register );

// testing 
route.get("/all_test",async (req,res)=>{
    try{
        const data=  await Pharma.find();
    res.json({
        success:1,
        data:data
    })
    }
    catch(e){
        console.log(e,"error");
    }
})
route.get("/test",auth("Pharma"),(req,res,next)=>{
    console.log(req.userInfo);
    res.json({
        message:"auth working"
    });
});

// auth


module.exports=route;

