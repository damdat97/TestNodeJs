const express = require('express');
const { getHomePage, getTest, getImage } = require('../controllers/homeControllers');

const router = express.Router();

router.get('/', getHomePage)
  
router.get('/test', getTest)

router.get('/image', getImage)

module.exports = router;