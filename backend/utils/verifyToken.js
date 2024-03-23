
import jwt from 'jsonwebtoken';

const verifyToken = (req,res,next) =>{
    // Extracting token from cookies
    const token = req.cookies.accessToken

 // If token is not provided, return unauthorized error
    if(!token){
        return res
        .status(401)
        .json({
            success:false,
            message: "You're not authorize"
        })
    }

    // Verifying token validity

    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return res
            .status(401)
            .json({
                success:false,
                message: "token in invalid"
            })
        }

        req.user = user
        next()

       
    })
}

// verify if a user is authorized to access a resource
export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id){
            next();
        }else{
            return res
            .status(401)
            .json({
                success:false,
                message:"You're not authenticated"
            });
        }
    });
};



