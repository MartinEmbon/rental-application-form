// var multer = require('multer');

// module.exports.files = {
//     storage: function () {
//         var storage = multer.diskStorage({
//             destination: function (req, file, cb) {
//                 cb(null, 'controllers/uploads')
//             },
//             filename: function (req, file, cb) {
//                 cb(null, file.originalname + '-' + Date.now() + '.pdf')
//             }
//         })
//         return storage;

//     }
// }