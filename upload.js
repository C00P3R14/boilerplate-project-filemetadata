const multer = require('multer');

//set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'uploads/')
    },
    filename: (req,file,cb) => {
        
        cb(null,file.originalname + '-' + Date.now())
    }
})

//Create multer instance
const upload = multer({storage:storage})

module.exports = upload