const jwt = require('jsonwebtoken');
exports.fetchuser = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        // console.log(token);
        //jwt.decode
        //decode user _id to manage user session
        const user = jwt.verify(token, process.env.JWT_SECRET);
        console.log(user)
        req.user = user;
    }
    else {
        res.status(400).json({ message: 'Authorization Required' });
    }

    next();

}

exports.userMiddleware = (req, res, next) => {
    if (req.user.role !== 'user') {
        res.status(400).json({ message: "User Access Denied" });
    }
    next();
}

exports.adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        res.status(400).json({ message: "Admin Access Denied" });
    }
    next();
}