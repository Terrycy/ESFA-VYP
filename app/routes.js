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

// v3.0.1 stuff
router.get('/v3.0.1/vyp', function (req, res) {
  res.render('v3.0.1/index')
})
router.get('/3.0.1/vyp/b', function (req, res) {
  res.render('split-journey/index')
})
router.get('/v3.0.1/payment-history', function (req, res) {
  res.render('v3.0.1/remittances/index')
})
router.get('/v3.0.1/mvp/payment-history', function (req, res) {
  res.render('v3.0.1/remittances/index-alternate')
})
router.get('/v3.0.1/filter-and-export', function (req, res) {
  res.render('v3.0.1/transaction-view/index')
})

router.get('/payment-history/remittance-statement/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v3.0.3/remittance-statement/index', {
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId
  })
})
// v3.0.2 stuff
router.get('/v3.0.2/vyp', function (req, res) {
  res.render('v3.0.2/index')
})
router.get('/3.0.2/vyp/b', function (req, res) {
  res.render('split-journey/index')
})
router.get('/v3.0.2/payment-history', function (req, res) {
  res.render('v3.0.2/remittances/index')
})
router.get('/v3.0.2/mvp/payment-history', function (req, res) {
  res.render('v3.0.2/remittances/index-alternate')
})
router.get('/v3.0.2/filter-and-export', function (req, res) {
  res.render('v3.0.2/transaction-view/index')
})
// v3.0.3 stuff
router.get('/v3.0.3/vyp', function (req, res) {
  res.render('v3.0.3/index')
})
router.get('/3.0.3/vyp/b', function (req, res) {
  res.render('split-journey/index')
})
router.get('/v3.0.3/payment-history', function (req, res) {
  res.render('v3.0.3/remittances/index')
})
router.get('/v3.0.3/mvp/payment-history', function (req, res) {
  res.render('v3.0.3/remittances/index-alternate')
})
router.get('/v3.0.3/filter-and-export', function (req, res) {
  res.render('v3.0.3/transaction-view/index')
})
// v3.0.4 stuff
router.get('/v3.0.4/vyp', function (req, res) {
  res.render('v3.0.4/index')
})
router.get('/3.0.4/vyp/b', function (req, res) {
  res.render('split-journey/index')
})
router.get('/v3.0.4/payment-history', function (req, res) {
  res.render('v3.0.4/remittances/index')
})
router.get('/v3.0.4/mvp/payment-history', function (req, res) {
  res.render('v3.0.4/remittances/index-alternate')
})
router.get('/v3.0.4/filter-and-export', function (req, res) {
  res.render('v3.0.4/transaction-view/index')
})
router.get('/v3.0.4/payment-history/remittance-statement/:remittanceAcademy/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v3.0.4/remittance-statement/index', {
    "remittanceAcademy": req.params.remittanceAcademy,
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId,
  })
})
router.get('/v3.0.4/payment-history/remittance-statement-post16/:remittanceAcademy/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v3.0.4/remittance-statement-post16/index', {
    "remittanceAcademy": req.params.remittanceAcademy,
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId,
  })
})

// v3.0.5 stuff
router.get('/v3.0.5/vyp', function (req, res) {
  res.render('v3.0.5/index')
})
router.get('/3.0.5/vyp/b', function (req, res) {
  res.render('split-journey/index')
})
router.get('/v3.0.5/payment-history', function (req, res) {
  res.render('v3.0.5/remittances/index')
})
router.get('/v3.0.5/mvp/payment-history', function (req, res) {
  res.render('v3.0.5/remittances/index-alternate')
})
router.get('/v3.0.5/filter-and-export', function (req, res) {
  res.render('v3.0.5/transaction-view/index')
})
router.get('/v3.0.5/payment-history/remittance-statement/:remittanceAcademy/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v3.0.5/remittance-statement/index', {
    "remittanceAcademy": req.params.remittanceAcademy,
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId,
  })
})
router.get('/v3.0.5/payment-history/remittance-statement-post16/:remittanceAcademy/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v3.0.5/remittance-statement-post16/index', {
    "remittanceAcademy": req.params.remittanceAcademy,
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId,
  })
})


// v4 MATS stuff
router.get('/v4/vyp', function (req, res) {
  res.render('v4.0.0/index')
})
router.get('/v4/filter-and-export', function (req, res) {
  res.render('v4.0.0/transaction-view/index')
})

router.get('/v4/payment-history/remittance-statement/:remittanceAcademy/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v4.0.0/remittance-statement/index', {
    "remittanceAcademy": req.params.remittanceAcademy,
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId,
  })
})

// v4.1 fixed MATs
router.get('/v4.1/vyp', function (req, res) {
  res.render('v4.1.0/index')
})
router.get('/v4.1/filter-and-export', function (req, res) {
  res.render('v4.1.0/transaction-view/index')
})

router.get('/v4.1/payment-history/remittance-statement/:remittanceAcademy/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v4.1.0/remittance-statement/index', {
    "remittanceAcademy": req.params.remittanceAcademy,
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId,
  })
})
router.get('/v4.1/payment-history/remittance-statement/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v4.1.0/remittance-statement/index', {
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId,
  })
})

// v4.2 fixed MATs
router.get('/v4.2/vyp', function (req, res) {
  res.render('v4.2.0/index')
})
router.get('/v4.2/filter-and-export', function (req, res) {
  res.render('v4.2.0/transaction-view/index')
})

router.get('/v4.2/payment-history/remittance-statement/:remittanceAcademy/:remittanceDate/:remittanceId', function (req, res) {

  res.render('v4.2.0/remittance-statement/index', {
    "remittanceAcademy": req.params.remittanceAcademy,
    'remittanceDate': req.params.remittanceDate,
    'remittanceId': req.params.remittanceId,
  })
})
router.get('/content', function (req, res) {
  res.render('contentdesign/index')
})

module.exports = router
