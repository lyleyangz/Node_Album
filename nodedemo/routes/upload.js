const express = require('express')
const router = express.Router();

var routerMethods = require('../controller/controller')

router.get('/',routerMethods.showUpload);
module.exports = router 