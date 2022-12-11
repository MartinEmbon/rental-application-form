require("dotenv").config()
const nodemailer = require("nodemailer")
var multer = require('multer');
var fileUpload = require('./upload-middleware');

let userController = {

    index: (req, res) => {
        return res.render("index")
    }
}

module.exports = userController
