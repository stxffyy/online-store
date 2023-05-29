//получаем роутер из экспресса
const Router = require('express')
//создаем объект этого роутера
const router = new Router()

//импортируем роутеры
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

//объединяем роутеры
// 1-й параметр - url, по ктр будет отрабатывать роутер
// 2-й - сам роутер
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

//экспортируем роутер
module.exports = router