import jwT from "jsonwebtoken";

const auth = (req,res,next) => {
    const token = req.headers.authorization;
    try{
        jwT.verify(token, process.env.JWT_SECRET);
        next();
    }catch(err){
        res.json({success: false, message: "Invalid Token"});
    }
}

export default auth;