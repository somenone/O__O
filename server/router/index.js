const koarouter = require('koa-router')
const multer = require('koa-multer');
const path = require('path');
const Oss = require("ali-oss")

const fileForm = require("../module/fileForm")
const router = new koarouter({
    prefix: '/api'
})
const ossClient = new Oss({
    region: 'region',
    accessKeyId: 'accessKeyId',
    accessKeySecret: 'accessKeySecret',
    bucket: 'bucket'
})



let storage = multer.diskStorage({
    destination: path.resolve('data'),
    filename: (ctx, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

let upload = multer({
    storage: storage
});

router.post('/upload', upload.single('file'),
    async (ctx, next) => {
        let {
            file
        } = ctx.req
        if (!file) {
            ctx.body = {
                code: 422,
                message: "uploaderror"
            }
        }

        let ossRes = await ossClient.put(file.filename, file.path, {
            mime: file.mimetype == "image/jpeg" ? "image/jpg" : file.mimetype
        });
        if (ossRes) {
            ctx.file = file
            ctx.ossRes = ossRes
        } else {
            ctx.body = {
                code: 423,
                message: "osserror"
            }
        }
        await next()
    })
router.post('/upload', async ctx => {
    let {
        file,
        ossRes
    } = ctx
    let res = await fileForm.create({
        filename: file.originalname,
        fileurl: ossRes.url
    })
    if (res) 
    ctx.body = {
        code: 200,
        data: {
            file: file,
            ossRes: ossRes,
            res: res
        }
    };
})

router.get('/test', async ctx => {

    ctx.body = 'ok'
})

router.get('/upload', async ctx => {

    let res = await fileForm.find().sort({_id:-1})
    // console.log("/upload---------->", res);
    ctx.body = res
})

module.exports = router