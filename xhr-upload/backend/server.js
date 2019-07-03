require('dotenv').config()

const koa = require('koa');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const koaRouter = require('koa-router');
const cors = require('@koa/cors');
const fs = require('fs');
const path = require('path');

const app = new koa();
const router = new koaRouter();

router
.get('/', (ctx, next) => {
  ctx.body = 'Hello World';
})
.post('/upload', koaBody({ multipart: true }), async (ctx, next) => {
  const { File } = ctx.request.files;
  
  // ctx.request.body => Get metadata
  const saveFile = (file) => {
    const reader = fs.createReadStream(file.path);
    const stream = fs.createWriteStream(path.join(__dirname, "files", file.name))
    reader.pipe(stream);
  }

  saveFile(File)

  ctx.body = {}
})

app
.use(logger())
.use(cors())
.use(router.routes())
.use(router.allowedMethods())

app.listen(process.env.PORT)
