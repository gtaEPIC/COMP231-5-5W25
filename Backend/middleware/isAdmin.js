// middleware/isAdmin.js
const User = require("../models/userResgistration");
const isAdmin = async (req, res, next) => {
    if (!req.auth) {
        const error = new Error('Unauthorized. Admin access required.');
        error.status = 401;
        next(error);
        return;
    }
    let userid = req.auth.userId;
    let user = await User.findById(userid);
    if (user && user.type === 'admin') {
        next();
    } else {
        const error = new Error('Forbidden. Admin access required.');
        error.status = 403;
        next(error);
    }
};

module.exports = isAdmin;
