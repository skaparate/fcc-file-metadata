const path = require('path')
const router = require('express').Router()
const uploader  = require('multer')({
    dest: path.join('..', 'uploads')
})

router.post('/fileanalyse', uploader.single('upfile'), function(req, res) {
    const file = req.file
    if (!file) {
        return res.send({
            error: 'No file uploaded'
        })
    }
    console.log('Analizing file', file)
    res.send({
        name: file.originalname,
        type: file.mimetype,
        size: file.size
    })
})

module.exports = router
