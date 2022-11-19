const Admin = require('../../_models/admin');

const login = async (req, res) => {
    const data = req.body
    
    try {
        const admin = await Admin.findOne({name: data.name, password: data.password})
    } catch (err) {

    }
    const response = {
        success: true,
    };
    return res.status(200).json(response);
};

module.exports = {
    login,
};