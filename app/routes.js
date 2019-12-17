const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/v100/statement', function (req, res) {
  res.render('v1.0.0/statement/index')
})
router.get('/v200/vyp', function (req, res) {
  res.render('v2.0.0/index')
})

// v2 routes

router.get('/payment-history', function (req, res) {
  res.render('v2.0.0/remittances/index')
})
router.get('/payment-history/remittance/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v2.0.0/statement/index', {
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId
  })
})

// v3 stuff
router.get('/v3/vyp', function (req, res) {
  res.render('v3.0.0/index')
})
router.get('/v3/vyp/b', function (req, res) {
  res.render('split-journey/index')
})
router.get('/v3/payment-history', function (req, res) {
  res.render('v3.0.0/remittances/index')
})
router.get('/v3/mvp/payment-history', function (req, res) {
  res.render('v3.0.0/remittances/index-alternate')
})
router.get('/v3/filter-and-export', function (req, res) {
  res.render('v3.0.0/transaction-view/index')
})

router.get('/payment-history/remittance-statement/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v3.0.0/remittance-statement/index', {
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId
  })
})


module.exports = router
