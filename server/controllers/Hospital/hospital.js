const Hospital = require("../../models/Hospital");

exports.register = async (req, res, next) => {
    try {
        const { password , name , phone , email , registrationId } = req.body;

        console.log("req.body",req.body);
        
        let hospital = await Hospital.create({
            password ,
            name , 
            phone , 
            email , 
            registrationId
        })
        const JWTtoken = await hospital.generateAuthToken()

        hospital = await hospital.toJSON();

        res.cookie('resultAuth', JWTtoken, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: false,
        })

        res.status(201).json(hospital)
    } catch (e) {
        
        console.log(e,"profile Hospital");
        res.json({
            success:0,
            error:e
        })
    }
}

exports.login = async (req, res, next) => {
    try {
        const { password, email } = req.body

        let hospital = await Hospital.findByCredentials(email, password)
        
        const JWTtoken = await hospital.generateAuthToken();

        hospital = hospital.toJSON()

        res.cookie('resultAuth', JWTtoken, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: false,
        })
    
        res.status(200).json({
            success:1,
            result:hospital
        })
    } catch (e) {
        
        console.log(e,"profile hospital");
        res.json({
            success:0,
            error:e
        })
    }
}

exports.logout = async (req, res, next) => {
    try {
        console.log("jt")
        res.clearCookie('resultAuth');
       
        res.status(200).json({
            success:1,
            message:"Logout successfully"
        })
    } catch (e) {
        console.log(e,"profile hospital");
       
        res.json({
            success:0,
            error:e
        })
    }
}