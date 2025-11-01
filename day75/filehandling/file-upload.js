const multer = require('multer');
const path = require('node:path');

const storageConfig = multer.diskStorage({
    destination: path.join(__dirname, "uploads"), filename: (req, file, res) => {
        res(null, Date.now() + "-" + file.originalname);//storage option config file saving  - destination folder unique filename with Date.now()
    },
});

const fileFilterConfig = function (req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") { //mine type => media type
        cb(null, true);//pass file
    } else {
        cb(null, false);//filter out files which are not images
    }
};

//configure the multer object
const upload = multer({
    storage: storageConfig,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilterConfig,
});

module.exports = upload;