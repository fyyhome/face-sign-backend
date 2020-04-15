'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')
const jwtMiddleware = require('../middlewares/jwt')

const router = new Router()
router.prefix('/api')
router.use(jwtMiddleware)

router.get('/verify', controllers.verify.verify)
router.post('/addStudent', controllers.addStudent.addStudent)
router.post('/detect', controllers.detect.detect)

module.exports = router
