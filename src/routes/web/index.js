const router = require('express').Router()

router.use('/', require('./home'))
router.use('/user', require('./users'))
router.use('/instructor', require('./instructor'))
router.use('/parent', require('./parent'))
router.use('/instructoredit', require('./instructorEdit'))
router.use('/edit', require('./editPage'))
router.use('/courses', require('./courses'))
router.use('/registeration', require('./register'))
router.use('/tables', require('./tables'))
router.use('/acadmic-records', require('./record'))
router.use('/exams', require('./exam'))
router.use('/login', require('./login'))
router.use('/logout', require('./logout'))
router.use('/api', require('./api'))

module.exports = router