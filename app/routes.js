const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/v100/statement', function (req, res) {
  res.render('v1.0.0/statement/index')
})

router.get('/v200/vyp', function (req, res) {
  res.render('v2.0.0/index')
})
router.get('/payment-history', function (req, res) {
  res.render('v2.0.0/remittances/index')
})
router.get('/payment-history/remittance/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v2.0.0/statement/index', {
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId
  })
})

module.exports = router
