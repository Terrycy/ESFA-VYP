const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/v100/statement', function (req, res) {
  res.render('v1.0.0/statement/index')
})

module.exports = router
