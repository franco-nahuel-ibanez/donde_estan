const path = require('path')
const multer = require('multer')
const uuid = require('uuid').v4

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img'),

    filename: (req, file, cb) => {
        cb(null, `${uuid()}.${file.mimetype.split('/')[1]}`)
    }
})

const upload = multer({
    storage: storage,

    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname))
        if(mimetype && extname){
            return cb(null, true)
        }
        cb(new Error("Invalid extension"))
    },
    limits: {fileSize: 100000}
}).single("image")


module.exports = function(req, res, next){
    upload(req, res, function(error){
        if(error){
            if(error instanceof multer.MulterError){
                if(error.code === 'LIMIT_FILE_SIZE'){
                    return res.status(401).json({ok: false, error: 'Limit file size. Max 100kb'})
                }else{
                    return res.status(401).json({ok: true, error: req.message})
                }
            }else{
                return res.status(401).json({ok: true, error: error.message})
            }
        }
        return next()
    })
}