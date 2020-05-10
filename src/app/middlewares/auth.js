const jwt = require('jsonwebtoken');
const {promisify} = require('util');


module.exports = async (req, res, next) => {
    const autheader = req.headers.authorization;

    if (!autheader){
        return res.status(401).json({message: "Token not provided"});
    }

    const [,token] = autheader.split(' ');

    try{
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET)

        req.userId = decoded.id;
        return next();
    }catch(err){
        return res.status(401).json({message: "Token invalid"});
    }
}
